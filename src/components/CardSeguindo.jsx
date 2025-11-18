import FotoExemplo from "../assets/Example.jpg"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

function CardSeguindo({ key, id, foto, nome, area, localizacao }) {

    const API = import.meta.env.VITE_FUNCIONARIOS_API;
    const usuarios = "usuarios";

    const usuarioLogadoLocalStorage = JSON.parse(localStorage.getItem("UsuarioLogado")) || {
        darkMode: false
    };

    function handleClick() {
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



    return (
        <div>
            {usuarioLogadoLocalStorage.darkMode === false ?
                //modo claro
                <div className="flex flex-col items-center justify-center bg-white rounded-4xl p-5 lg:p-10 lg:mx-20 my-5 shadow-2xl">
                    <div className="flex flex-row gap-10">
                        <img src={foto} alt="Usuario1" className="w-25 rounded-full" />

                        <div className="flex flex-col text-[#859F74]">
                            <p className="text-xl lg:text-4xl">{nome}</p>
                            <p className="text-lg lg:text-2xl">{area}</p>
                            <p className="text-lg lg:text-2xl">{localizacao}</p>
                            <div className="flex flex-row gap-5">

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-4 mt-5">
                        <Link to={`/visualizarPerfil/${id}`} className=" bg-white py-1 w-40 lg:w-60 rounded-2xl text-[#859F74] border-2 border-[#859F74] flex items-center justify-center shadow hover:bg-[#859F74] hover:text-white transition ">
                            PERFIL
                        </Link>
                        <button onClick={handleClick} to="/mensagens" className=" bg-white py-1 w-40 lg:w-60 rounded-2xl text-[#ff0000] border-2 border-[#ff0000] flex items-center justify-center shadow hover:bg-[#ff0000] hover:text-white transition ">
                            DEIXAR DE SEGUIR
                        </button>
                    </div>
                </div>
                :
                //modo escuro
                <div className="flex flex-col items-center justify-center bg-[#111411] rounded-4xl p-5 lg:p-10 lg:mx-20 my-5 shadow-2xl">
                    <div className="flex flex-row gap-10">
                        <img src={foto} alt="Usuario1" className="w-25 rounded-full" />

                        <div className="flex flex-col text-[#ffffff]">
                            <p className="text-xl lg:text-4xl">{nome}</p>
                            <p className="text-lg lg:text-2xl">{area}</p>
                            <p className="text-lg lg:text-2xl">{localizacao}</p>
                            <div className="flex flex-row gap-5">

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-4 mt-5">
                        <Link to={`/visualizarPerfil/${id}`} className=" bg-[#859F74] py-1 w-40 lg:w-60 rounded-2xl text-[#ffffff] border-2 border-[#859F74] flex items-center justify-center shadow hover:bg-[#ffffff] hover:text-[#859F74] transition ">
                            PERFIL
                        </Link>
                        <button onClick={handleClick} to="/mensagens" className=" bg-[#ff0000] py-1 w-40 lg:w-60 rounded-2xl text-[#ffffff] border-2 border-[#ff0000] flex items-center justify-center shadow hover:bg-[#ffffff] hover:text-[#ff0000] transition ">
                            DEIXAR DE SEGUIR
                        </button>
                    </div>
                </div>}


        </div>
    )
}

export default CardSeguindo
