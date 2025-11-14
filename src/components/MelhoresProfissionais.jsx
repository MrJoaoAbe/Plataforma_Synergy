import FotoExemplo from "../assets/Example.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import { Link, Links } from "react-router-dom"
import Ana from "../assets/ana.png"
import Celbit from "../assets/celbit.png"
import Sergio from "../assets/Sergio.png"

function MelhoresProfissionais() {

    const API = import.meta.env.VITE_FUNCIONARIOS_API;
    const usuarios = "usuarios";

    const usuarioLogadoLocalStorage = JSON.parse(localStorage.getItem("UsuarioLogado")) || {
        darkMode: false
    };
    const [funcionario, setFuncionario] = useState([])

    useEffect(() => {
        fetch(`${API}${usuarios}`)
            .then(res => res.json())
            .then((data) => {
                const maiores3 = data
                    .sort((a, b) => b.avaliacoes - a.avaliacoes)
                    .slice(0, 3)
                setFuncionario(maiores3)
            })
            .catch((err) => {
                console.error("Erro ao buscar usuário:", err);
                setCarregando(false);

            });
    }, [])

    return (
        <div>
            {usuarioLogadoLocalStorage.darkMode === false ?
                // Modo Claro
                <div className="bg-[#EDEBEB] rounded-4xl shadow-2xl flex flex-col items-center w-100 border-4 p-5 border-[#859F74] text-[#859F74]">
                    <p className="font-bold text-2xl pb-5">Melhores avaliados do site</p>


                    <div className="flex flex-col gap-3">

                        {funcionario.map((user) => (
                            <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3">
                                <img src={user.foto} alt="" className="w-12 rounded-full" />
                                <p className="text-2xl">{user.nome}</p>
                                <FontAwesomeIcon icon={faStar} style={{ color: "#859F74" }} className="text-xl" />
                                <p className="text-2xl">{user.avaliacoes}</p>
                            </div>
                        ))}

                    </div>
                </div >
                :
                // Modo Escuro
                <div className="bg-[#1A1D1A] rounded-4xl shadow-2xl flex flex-col items-center w-100 p-5  text-[#ffffff]">
                    <p className="font-bold text-2xl pb-5">Melhores avaliados do site</p>


                    <div className="flex flex-col gap-3">

                        {funcionario.map((user) => (
                            <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3">
                                <img src={user.foto} alt="" className="w-12 rounded-full" />
                                <p className="text-2xl">{user.nome}</p>
                                <FontAwesomeIcon icon={faStar} className="text-xl text-white" />
                                <p className="text-2xl">{user.avaliacoes}</p>
                            </div>
                        ))}

                    </div>
                </div >}

        </div>
    )
}

export default MelhoresProfissionais