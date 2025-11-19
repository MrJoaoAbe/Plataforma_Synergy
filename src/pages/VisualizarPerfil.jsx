import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function VisualizarPerfil() {
const navigate = useNavigate();

const API = import.meta.env.VITE_FUNCIONARIOS_API;
const usuarios = "usuarios/";
const { id } = useParams();

const usuarioLogadoLocalStorage = JSON.parse(localStorage.getItem("UsuarioLogado")) || {
    darkMode: false
};

const [usuario, setUsuario] = useState(null);
const [carregando, setCarregando] = useState(true);

const estaSeguindo = usuarioLogadoLocalStorage.seguindo?.includes(id);

useEffect(() => {
    fetch(`${API}${usuarios}${id}`)
        .then((res) => res.json())
        .then((data) => {
            setUsuario(data);
            setCarregando(false);
        })
        .catch((err) => {
            console.error("Erro ao buscar usuário:", err);
            setCarregando(false);
        });
}, [API, id]);

if (carregando) {
    return (
        <div className="bg-[#DFDFDF] min-h-screen flex items-center justify-center text-[#859F74] text-2xl">
            Carregando perfil...
        </div>
    );
}

if (!usuario) {
    return (
        <div className="bg-[#DFDFDF] min-h-screen flex items-center justify-center text-red-500 text-2xl">
            Usuário não encontrado.
        </div>
    );
}

function seguir() {
    if (!usuarioLogadoLocalStorage.id) {
        alert("Você precisa estar logado para seguir alguém.");
        navigate("/login");
        return;
    }
    const listaAtual = usuarioLogadoLocalStorage.seguindo || [];
    const novaListaSeguindo = listaAtual.includes(id)
        ? listaAtual
        : [...listaAtual, id];
    const usuarioAtualizado = {
        ...usuarioLogadoLocalStorage,
        seguindo: novaListaSeguindo,
    };
    localStorage.setItem("UsuarioLogado", JSON.stringify(usuarioAtualizado));
    fetch(`${API}${usuarios}/${usuarioLogadoLocalStorage.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuarioAtualizado),
    })
        .then((res) => res.json())
        .then(() => window.location.reload())
        .catch((err) => console.error("Erro ao atualizar usuário:", err));
}

function pararSeguir() {
    const novaListaSeguindo = usuarioLogadoLocalStorage.seguindo.filter(
        (seguindoId) => seguindoId !== id
    );
    const usuarioAtualizado = {
        ...usuarioLogadoLocalStorage,
        seguindo: novaListaSeguindo,
    };
    localStorage.setItem("UsuarioLogado", JSON.stringify(usuarioAtualizado));
    fetch(`${API}${usuarios}/${usuarioLogadoLocalStorage.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuarioAtualizado),
    })
        .then((res) => res.json())
        .then(() => window.location.reload())
        .catch((err) => console.error("Erro ao atualizar usuário:", err));
}

function estrelar() {
    if (!usuarioLogadoLocalStorage.id) {
        alert("Você precisa estar logado para seguir alguém.");
        navigate("/login");
        return;
    }
    const usuarioAvaliado = { ...usuario, avaliacoes: usuario.avaliacoes + 1 };
    fetch(`${API}${usuarios}${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(usuarioAvaliado),
    })
        .then((res) => {
            if (!res.ok) throw new Error("Erro ao avaliar usuário");
            return res.json();
        })
        .then((data) => {
            setUsuario(data);
            alert("Você adicionou uma estrela!");
        })
        .catch(() => alert("Erro ao avaliar. Tente novamente."));
}

const conteudoPerfil = (modoClaro = true) => (
    <div className={`min-h-screen flex items-center justify-center px-4 sm:px-0 ${modoClaro ? "bg-[#DFDFDF]" : "bg-[#111411]"}`}>
        <div className={`w-full sm:w-350 rounded-4xl shadow-2xl flex flex-col ${modoClaro ? "bg-white" : "bg-[#1A1D1A]"}`}>
            <h1 className={`font-extralight text-4xl sm:text-5xl ${modoClaro ? "text-[#859F74]" : "text-white"} pt-10 text-center`}>
                EXIBINDO
            </h1>

            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center p-6 sm:p-20 ${modoClaro ? "text-[#859F74]" : "text-white"}`}>
                <img
                    src={usuario?.foto}
                    alt="Foto do usuário"
                    className="w-40 sm:w-60 mx-auto rounded-4xl border-4 border-white shadow-xl"
                />

                <div className="flex flex-col items-center sm:items-start gap-2 sm:gap-4">
                    <div className="flex gap-1 sm:gap-2 items-center text-2xl sm:text-4xl font-light">
                        <p>{usuario?.nome}</p>
                        <p>{usuario?.idade}</p>
                    </div>
                    <p className="text-lg sm:text-2xl">{usuario?.cargo}</p>
                    <p className="text-lg sm:text-2xl">{usuario?.area}</p>
                    <p className="text-lg sm:text-2xl">{usuario?.localizacao}</p>
                </div>

                <div className="flex justify-around w-full text-center text-lg sm:text-3xl">
                    <div>
                        <p className="font-bold">{usuario?.avaliacoes}</p>
                        <p className="text-sm">Estrelas</p>
                    </div>
                    <div>
                        <p className="font-bold">{usuario?.seguidores?.length ?? 0}</p>
                        <p className="text-sm">Seguindo</p>
                    </div>
                    <div>
                        <p className="font-bold">{usuario?.postagens?.length ?? 0}</p>
                        <p className="text-sm">Posts</p>
                    </div>
                </div>

                <p className="mt-4 sm:mt-6 col-span-1 sm:col-span-2 text-center sm:text-left text-base sm:text-lg">
                    {usuario?.resumo}
                </p>

                <div className="flex flex-col col-span-1 sm:col-start-3 gap-4 sm:gap-5">
                    <div className="flex flex-row gap-2 sm:gap-4 flex-wrap">
                        <div className="flex flex-col gap-1">
                            <p className="text-lg sm:text-xl font-semibold">EXPERIÊNCIAS</p>
                            <div className="text-sm sm:text-xl space-y-1 sm:space-y-2">
                                {Array.isArray(usuario?.experiencias) &&
                                    usuario.experiencias.map((exp, i) => (
                                        <div key={i} className="border-b border-[#859F74]/30 pb-1 sm:pb-2">
                                            <p><strong>Empresa:</strong> {exp.empresa}</p>
                                            <p><strong>Cargo:</strong> {exp.cargo}</p>
                                            <p><strong>Período:</strong> {exp.inicio} – {exp.fim}</p>
                                            <p><strong>Descrição:</strong> {exp.descricao}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-lg sm:text-xl font-semibold">
                                {usuario?.formacao?.[0]?.instituicao}
                            </p>
                            <p className="text-lg sm:text-xl">
                                {usuario?.formacao?.[0]?.curso || "FIAP"}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className="text-lg sm:text-xl font-semibold">
                            {usuario?.idiomas?.[0]?.idioma || "Idioma"}
                        </p>
                        <p className="text-lg sm:text-xl">
                            {usuario?.idiomas?.[0]?.nivel || "Inglês"}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col col-span-1 sm:col-span-2 gap-4 sm:gap-5">
                    <div>
                        <p className="text-lg sm:text-xl font-semibold">SOFTSKILLS</p>
                        <div className="flex flex-row gap-1 sm:gap-2 flex-wrap justify-center sm:justify-start">
                            {usuario?.soft_skills?.map((skill, i) => (
                                <p key={i} className="bg-[#859F74] text-white text-sm sm:text-md p-1 px-2 rounded-full">
                                    {skill}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col col-span-1 sm:col-span-2 gap-4 sm:gap-5">
                    <div>
                        <p className="text-lg sm:text-xl font-semibold">HABILIDADES</p>
                        <div className="flex flex-row gap-1 sm:gap-2 flex-wrap justify-center sm:justify-start">
                            {usuario?.hard_skills?.map((skill, i) => (
                                <p key={i} className="bg-[#859F74] text-white text-sm sm:text-md p-1 px-3 rounded-full">
                                    {skill}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col col-span-1 sm:col-start-3 items-center gap-3 sm:gap-4 w-full">
                    {estaSeguindo ? (
                        <button
                            onClick={pararSeguir}
                            className="bg-white py-1.5 sm:py-2 w-full sm:w-60 rounded-2xl text-[#ff0000] border-4 border-[#ff0000] shadow hover:bg-[#ff0000] hover:text-white transition"
                        >
                            DEIXAR DE SEGUIR
                        </button>
                    ) : (
                        <button
                            onClick={seguir}
                            className="bg-white py-1.5 sm:py-2 w-full sm:w-60 rounded-2xl text-[#859F74] border-4 border-[#859F74] shadow hover:bg-[#859F74] hover:text-white transition"
                        >
                            SEGUIR
                        </button>
                    )}

                    <button
                        onClick={estrelar}
                        className="bg-white py-1.5 sm:py-2 w-full sm:w-60 rounded-2xl text-[#859F74] border-4 border-[#859F74] shadow hover:bg-[#859F74] hover:text-white transition"
                    >
                        ESTRELAR
                    </button>

                    <button
                        onClick={() => {
                            if (!usuarioLogadoLocalStorage.id) {
                                alert("Você precisa estar logado para enviar mensagem.");
                                navigate("/login");
                                return;
                            }
                            navigate(`/mensagemDireta/${id}`);
                        }}
                        className="bg-white py-1.5 sm:py-2 w-full sm:w-60 rounded-2xl text-[#859F74] border-4 border-[#859F74] shadow hover:bg-[#859F74] hover:text-white transition"
                    >
                        ENVIAR MENSAGEM
                    </button>
                </div>
            </div>
        </div>
    </div>
);

return (
    <div>
        {conteudoPerfil(usuarioLogadoLocalStorage.darkMode === false)}
    </div>
);

}

export default VisualizarPerfil;
