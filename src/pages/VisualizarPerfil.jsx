import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function VisualizarPerfil() {
    const navigate = useNavigate()

    const API = import.meta.env.VITE_FUNCIONARIOS_API;
    const usuarios = "usuarios/";
    const { id } = useParams();

    const usuarioLogadoLocalStorage = JSON.parse(localStorage.getItem("UsuarioLogado")) || {
        darkMode: false
    };;

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
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuarioAtualizado),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Usuário atualizado:", data);
                window.location.reload();
                alert(`Você começou a Seguir ${usuario.nome}`)
                navigate('/')
            })

            .catch((err) => console.error("Erro ao atualizar usuário:", err));

        if (onComecarSeguir) onComecarSeguir(id);
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
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuarioAtualizado),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Usuário atualizado:", data);
                window.location.reload();
            })

            .catch((err) => console.error("Erro ao atualizar usuário:", err));

        if (onPararSeguir) onPararSeguir(id);
    }


    function estrelar() {

        const usuarioAvaliado = {
            ...usuario,
            avaliacoes: usuario.avaliacoes + 1
        };

        fetch(`${API}${usuarios}${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuarioAvaliado),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Erro ao avaliar usuário");
                }
                return res.json();
            })
            .then(data => {
                setUsuario(data)
                alert("Você adicionou uma estrela!");
            })
            .catch((err) => {
                console.error(err);
                alert("Erro ao avaliar. Tente novamente.");
            });
    }


    return (
        <div>
            {usuarioLogadoLocalStorage.darkMode === false ?
                //modo clarp
                <div className="bg-[#DFDFDF] min-h-screen flex items-center justify-center">
                    <div className="w-350 bg-white rounded-4xl shadow-2xl flex flex-col">
                        <div className="flex flex-row items-center justify-between px-10">
                            <h1 className="font-extralight text-4xl text-[#859F74] p-20 pb-0 flex items-center ml-10">
                                EXIBINDO
                            </h1>
                        </div>

                        <div className="grid grid-cols-3 gap-6 items-center p-20 px-40 text-[#859F74]">
                            <img
                                src={usuario?.foto}
                                alt="Foto do usuário"
                                className="w-60 rounded-4xl border-4 border-white shadow-xl"
                            />

                            {/* INFORMAÇÕES PRINCIPAIS */}
                            <div className="flex flex-col space-y-2 gap-4 text-[#859F74]">
                                <div className="flex gap-2 items-center text-4xl font-light">
                                    <p>{usuario?.nome}</p>
                                    <p>{usuario?.idade}</p>
                                </div>
                                <p className="text-2xl">{usuario?.cargo}</p>
                                <p className="text-2xl">{usuario?.area}</p>
                                <p className="text-2xl">{usuario?.localizacao}</p>
                            </div>

                            {/* NÚMEROS */}
                            <div className="flex justify-around text-[#859F74] text-center">
                                <div>
                                    <p className="font-bold text-3xl">{usuario?.avaliacoes}</p>
                                    <p className="text-sm">Estrelas</p>
                                </div>
                                <div>
                                    <p className="font-bold text-3xl">
                                        {usuario?.seguidores?.length ?? 0}
                                    </p>
                                    <p className="text-sm">Seguindo</p>
                                </div>
                                <div>
                                    <p className="font-bold text-3xl">
                                        {usuario?.postagens?.length ?? 0}
                                    </p>
                                    <p className="text-sm">Posts</p>
                                </div>
                            </div>

                            {/* RESUMO */}
                            <p className="mt-6 col-start-1 col-span-2 text-[#859F74] text-center text-lg">
                                {usuario?.resumo}
                            </p>

                            {/* EXPERIÊNCIAS / FORMAÇÃO / IDIOMAS */}
                            <div className="flex flex-col col-start-3 gap-5">
                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xl font-semibold">EXPERIÊNCIAS</p>
                                        <div className="text-xl space-y-2">
                                            {Array.isArray(usuario?.experiencias)
                                                ? usuario.experiencias.map((exp, i) => (
                                                    <div
                                                        key={i}
                                                        className="border-b border-[#859F74]/30 pb-2"
                                                    >
                                                        <p>
                                                            <strong>Empresa:</strong> {exp.empresa}
                                                        </p>
                                                        <p>
                                                            <strong>Cargo:</strong> {exp.cargo}
                                                        </p>
                                                        <p>
                                                            <strong>Período:</strong> {exp.inicio} –{" "}
                                                            {exp.fim}
                                                        </p>
                                                        <p>
                                                            <strong>Descrição:</strong> {exp.descricao}
                                                        </p>
                                                    </div>
                                                ))
                                                : usuario?.experiencias && (
                                                    <div>
                                                        <p>
                                                            <strong>Empresa:</strong>{" "}
                                                            {usuario.experiencias.empresa}
                                                        </p>
                                                        <p>
                                                            <strong>Cargo:</strong>{" "}
                                                            {usuario.experiencias.cargo}
                                                        </p>
                                                        <p>
                                                            <strong>Período:</strong>{" "}
                                                            {usuario.experiencias.inicio} –{" "}
                                                            {usuario.experiencias.fim}
                                                        </p>
                                                        <p>
                                                            <strong>Descrição:</strong>{" "}
                                                            {usuario.experiencias.descricao}
                                                        </p>
                                                    </div>
                                                )}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="text-xl font-semibold">
                                            {usuario?.formacao?.[0]?.instituicao}
                                        </p>
                                        <p className="text-xl">
                                            {usuario?.formacao?.[0]?.curso || "FIAP"}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <p className="text-xl font-semibold">
                                        {usuario?.idiomas?.[0]?.idioma || "Idioma"}
                                    </p>
                                    <p className="text-xl">
                                        {usuario?.idiomas?.[0]?.nivel || "Inglês"}
                                    </p>
                                </div>
                            </div>

                            {/* SOFT SKILLS */}
                            <div className="flex flex-col col-start-1 col-span-2 gap-5">
                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-col gap-4">
                                        <p className="text-xl font-semibold">SOFTSKILLS</p>
                                        <div className="flex flex-row gap-2 flex-wrap">
                                            {usuario?.soft_skills?.map((skill, i) => (
                                                <p
                                                    key={i}
                                                    className="bg-[#859F74] text-white text-md p-1 px-2 rounded-full"
                                                >
                                                    {skill}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* HARD SKILLS */}
                            <div className="flex flex-col col-start-1 col-span-2 gap-5">
                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-col gap-4">
                                        <p className="text-xl font-semibold">HABILIDADES</p>
                                        <div className="flex flex-row gap-2 flex-wrap">
                                            {usuario?.hard_skills?.map((skill, i) => (
                                                <p
                                                    key={i}
                                                    className="bg-[#859F74] text-white text-md p-1 px-3 rounded-full"
                                                >
                                                    {skill}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BOTÕES */}
                            <div className="flex flex-col col-start-3 items-center gap-4">
                                {estaSeguindo ?
                                    <button onClick={pararSeguir} className="bg-white py-2 w-70 rounded-2xl text-[#ff0000] border-4 border-[#ff0000] flex items-center justify-center shadow hover:bg-[#ff0000] hover:text-white transition">
                                        DEIXAR DE SEGUIR
                                    </button> : <button onClick={seguir} className="bg-white py-2 w-70 rounded-2xl text-[#859F74] border-4 border-[#859F74] flex items-center justify-center shadow hover:bg-[#859F74] hover:text-white transition">
                                        SEGUIR
                                    </button>}

                                <button onClick={estrelar} className="bg-white py-2 w-70 rounded-2xl text-[#859F74] border-4 border-[#859F74] flex items-center justify-center shadow hover:bg-[#859F74] hover:text-white transition">
                                    ESTRELAR
                                </button>
                                <Link
                                    to={`/mensagemDireta/${id}`}
                                    className="bg-white py-2 w-70 rounded-2xl text-[#859F74] border-4 border-[#859F74] flex items-center justify-center shadow hover:bg-[#859F74] hover:text-white transition"
                                >
                                    ENVIAR MENSAGEM
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                :
                //modo escuro
                <div className="bg-[#111411] min-h-screen flex items-center justify-center">
                    <div className="w-350 bg-[#1A1D1A] rounded-4xl shadow-2xl flex flex-col">
                        <div className="flex flex-row items-center justify-between px-10">
                            <h1 className="font-extralight text-4xl text-[#ffffff] p-20 pb-0 flex items-center ml-10">
                                EXIBINDO
                            </h1>
                        </div>

                        <div className="grid grid-cols-3 gap-6 items-center p-20 px-40 text-[#859F74]">
                            <img
                                src={usuario?.foto}
                                alt="Foto do usuário"
                                className="w-60 rounded-4xl border-4 border-white shadow-xl"
                            />

                            {/* INFORMAÇÕES PRINCIPAIS */}
                            <div className="flex flex-col space-y-2 gap-4 text-[#ffffff]">
                                <div className="flex gap-2 items-center text-4xl font-light">
                                    <p>{usuario?.nome}</p>
                                    <p>{usuario?.idade}</p>
                                </div>
                                <p className="text-2xl">{usuario?.cargo}</p>
                                <p className="text-2xl">{usuario?.area}</p>
                                <p className="text-2xl">{usuario?.localizacao}</p>
                            </div>

                            {/* NÚMEROS */}
                            <div className="flex justify-around text-[#ffffff] text-center">
                                <div>
                                    <p className="font-bold text-3xl">{usuario?.avaliacoes}</p>
                                    <p className="text-sm">Estrelas</p>
                                </div>
                                <div>
                                    <p className="font-bold text-3xl">
                                        {usuario?.seguidores?.length ?? 0}
                                    </p>
                                    <p className="text-sm">Seguindo</p>
                                </div>
                                <div>
                                    <p className="font-bold text-3xl">
                                        {usuario?.postagens?.length ?? 0}
                                    </p>
                                    <p className="text-sm">Posts</p>
                                </div>
                            </div>

                            {/* RESUMO */}
                            <p className="mt-6 col-start-1 col-span-2 text-[#ffffff] text-center text-lg">
                                {usuario?.resumo}
                            </p>

                            {/* EXPERIÊNCIAS / FORMAÇÃO / IDIOMAS */}
                            <div className="flex flex-col col-start-3 gap-5 text-white">
                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xl font-semibold">EXPERIÊNCIAS</p>
                                        <div className="text-xl space-y-2">
                                            {Array.isArray(usuario?.experiencias)
                                                ? usuario.experiencias.map((exp, i) => (
                                                    <div
                                                        key={i}
                                                        className="border-b border-[#859F74]/30 pb-2"
                                                    >
                                                        <p>
                                                            <strong>Empresa:</strong> {exp.empresa}
                                                        </p>
                                                        <p>
                                                            <strong>Cargo:</strong> {exp.cargo}
                                                        </p>
                                                        <p>
                                                            <strong>Período:</strong> {exp.inicio} –{" "}
                                                            {exp.fim}
                                                        </p>
                                                        <p>
                                                            <strong>Descrição:</strong> {exp.descricao}
                                                        </p>
                                                    </div>
                                                ))
                                                : usuario?.experiencias && (
                                                    <div>
                                                        <p>
                                                            <strong>Empresa:</strong>{" "}
                                                            {usuario.experiencias.empresa}
                                                        </p>
                                                        <p>
                                                            <strong>Cargo:</strong>{" "}
                                                            {usuario.experiencias.cargo}
                                                        </p>
                                                        <p>
                                                            <strong>Período:</strong>{" "}
                                                            {usuario.experiencias.inicio} –{" "}
                                                            {usuario.experiencias.fim}
                                                        </p>
                                                        <p>
                                                            <strong>Descrição:</strong>{" "}
                                                            {usuario.experiencias.descricao}
                                                        </p>
                                                    </div>
                                                )}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <p className="text-xl font-semibold">
                                            {usuario?.formacao?.[0]?.instituicao}
                                        </p>
                                        <p className="text-xl">
                                            {usuario?.formacao?.[0]?.curso || "FIAP"}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <p className="text-xl font-semibold">
                                        {usuario?.idiomas?.[0]?.idioma || "Idioma"}
                                    </p>
                                    <p className="text-xl">
                                        {usuario?.idiomas?.[0]?.nivel || "Inglês"}
                                    </p>
                                </div>
                            </div>

                            {/* SOFT SKILLS */}
                            <div className="flex flex-col col-start-1 col-span-2 gap-5">
                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-col gap-4">
                                        <p className="text-xl font-semibold text-white">SOFTSKILLS</p>
                                        <div className="flex flex-row gap-2 flex-wrap">
                                            {usuario?.soft_skills?.map((skill, i) => (
                                                <p
                                                    key={i}
                                                    className="bg-[#859F74] text-white text-md p-1 px-2 rounded-full"
                                                >
                                                    {skill}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* HARD SKILLS */}
                            <div className="flex flex-col col-start-1 col-span-2 gap-5">
                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-col gap-4">
                                        <p className="text-xl font-semibold text-white">HABILIDADES</p>
                                        <div className="flex flex-row gap-2 flex-wrap">
                                            {usuario?.hard_skills?.map((skill, i) => (
                                                <p
                                                    key={i}
                                                    className="bg-[#859F74] text-white text-md p-1 px-3 rounded-full"
                                                >
                                                    {skill}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BOTÕES */}
                            <div className="flex flex-col col-start-3 items-center gap-4">
                                {estaSeguindo ?
                                    <button onClick={pararSeguir} className="bg-[#ff0000] py-2 w-70 rounded-2xl text-[#ffffff] border-4 border-[#ff0000] flex items-center justify-center shadow hover:bg-[#ffffff] hover:text-[#ff0000] transition">
                                        DEIXAR DE SEGUIR
                                    </button> : <button onClick={seguir} className="bg-[#859F74] py-2 w-70 rounded-2xl text-[#ffffff] border-4 border-[#859F74] flex items-center justify-center shadow hover:bg-[#ffffff] hover:text-[#859F74] transition">
                                        SEGUIR
                                    </button>}

                                <button onClick={estrelar} className="bg-[#859F74] py-2 w-70 rounded-2xl text-[#ffffff] border-4 border-[#859F74] flex items-center justify-center shadow hover:bg-[#ffffff] hover:text-[#859F74] transition">
                                    ESTRELAR
                                </button>
                                <Link
                                    to={`/mensagemDireta/${id}`}
                                    className="bg-[#859F74] py-2 w-70 rounded-2xl text-[#ffffff] border-4 border-[#859F74] flex items-center justify-center shadow hover:bg-[#ffffff] hover:text-[#859F74] transition"
                                >
                                    ENVIAR MENSAGEM
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>}

        </div>
    );
}

export default VisualizarPerfil;
