import { useState, useEffect } from "react";
import CardSeguindo from "../components/CardSeguindo";

function Seguidores() {
    const API = import.meta.env.VITE_FUNCIONARIOS_API;
    const usuarios = "usuarios";

    const [usuariosSeguidos, setUsuariosSeguidos] = useState([]);

    const usuarioLogadoLocalStorage = JSON.parse(localStorage.getItem("UsuarioLogado"));

    useEffect(() => {
        fetch(`${API}${usuarios}`)
            .then((res) => res.json())
            .then((data) => {
                const usuarioLogado = data.find(
                    (user) => user.id === usuarioLogadoLocalStorage.id
                );

                if (!usuarioLogado) return;

                const idSeguindo = usuarioLogado.seguindo || [];
                const filtrados = data.filter((user) => idSeguindo.includes(user.id));
                setUsuariosSeguidos(filtrados);
            })
            .catch((err) => console.error("Erro ao carregar usuários:", err));
    }, [API]);

    return (
        <div className="bg-[#EDEBEB] rounded-4xl shadow-2xl flex flex-col">
            <h1 className="font-extralight text-4xl text-[#859F74] p-15 pb-0 flex items-center ml-10">
                SEGUINDO
            </h1>
            {usuariosSeguidos.map((seguindo) => (
                <CardSeguindo
                    key={seguindo.id}
                    id={seguindo.id}
                    nome={seguindo.nome}
                    foto={seguindo.foto}
                    area={seguindo.area}
                    localizacao={seguindo.localizacao}
                />
            ))}
        </div>
    );
}

export default Seguidores;
