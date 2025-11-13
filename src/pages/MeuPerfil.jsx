import { Link } from "react-router-dom"
import FotoExemplo from "../assets/Example.jpg"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";


function MeuPerfil() {

    const [ativado, setAtivado] = useState(false);

    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado"))

    function handleClick() {
        localStorage.removeItem("UsuarioLogado");
    }


    return (
        <div className="bg-[#DFDFDF] min-h-screen flex items-center justify-center">
            <div className="w-350  bg-white rounded-4xl shadow-2xl flex flex-col">
                <div className="flex juflex flex-row items-center justify-between px-10stify-around">
                    <h1 className="font-extralight text-4xl text-[#859F74] p-20 pb-0 flex items-center ml-10">MEU PERFIL</h1>
                    <div className="flex flex-row mr-30 mt-20 gap-5">
                        <FontAwesomeIcon icon={faMoon} className="text-3xl text-[#859F74]" />
                        <button className={`w-14 h-8 rounded-full flex items-center px-1 transition duration-300 shadow-2xl mb-6 ${ativado ? "bg-[#859F74] justify-end " : "bg-[#DFDFDF] justify-start "}`} onClick={() => setAtivado(!ativado)}>
                            <div className="w-6 h-6 bg-white rounded-full shadow-md"></div>
                        </button>
                    </div>


                </div>


                <div className="grid grid-cols-3 gap-6 items-center p-20 px-40 text-[#859F74]">
                    <img src={usuarioLogado === null ? '' : usuarioLogado.foto} className="w-60 rounded-4xl border-4 border-white shadow-xl" />

                    <div className="flex flex-col space-y-2 gap-4 text-[#859F74]">
                        <div className="flex gap-2 items-center text-4xl font-light">
                            <p>{usuarioLogado === null ? '' : usuarioLogado.nome}</p>
                            <p>{usuarioLogado === null ? '' : usuarioLogado.idade}</p>
                        </div>
                        <p className="text-2xl">{usuarioLogado === null ? '' : usuarioLogado.cargo}</p>
                        <p className="text-2xl">{usuarioLogado === null ? '' : usuarioLogado.area}</p>
                        <p className="text-2xl">{usuarioLogado === null ? '' : usuarioLogado.localizacao}</p>
                    </div>

                    <div className="flex justify-around text-[#859F74] text-center">
                        <div>
                            <p className="font-bold text-3xl">{usuarioLogado === null ? '' : usuarioLogado.avaliacoes}</p>
                            <p className="text-sm">{usuarioLogado === null ? '' : 'Estrelas'}</p>
                        </div>
                        <div>
                            <p className="font-bold text-3xl">{usuarioLogado === null ? '' : usuarioLogado.seguidores.length}</p>
                            <p className="text-sm">{usuarioLogado === null ? '' : 'Seguidores'}</p>
                        </div>
                        <div>
                            <p className="font-bold text-3xl">{usuarioLogado === null ? '' : usuarioLogado.postagens.length}</p>
                            <p className="text-sm">{usuarioLogado === null ? '' : 'Posts'}</p>
                        </div>
                    </div>

                    <p className="mt-6 col-start-1 col-span-2 text-[#859F74] text-center text-lg">
                        {usuarioLogado === null ? '' : usuarioLogado.resumo}
                    </p>

                    <div className="flex flex-col col-start-3 gap-5">
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-1">
                                <p className="text-xl font-semibold">{usuarioLogado === null ? '' : 'EXPERIÊNCIAS'}</p>
                                <p className="text-xl">{usuarioLogado === null ? '' : usuarioLogado.experiencias[0].empresa}</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className="text-xl font-semibold">{usuarioLogado === null ? '' : 'FORMAÇÃO'}</p>
                                <p className="text-xl">{usuarioLogado === null ? '' : usuarioLogado.formacao[0].instituicao}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-xl font-semibold">{usuarioLogado === null ? '' : 'IDIOMAS'}</p>
                            <p className="text-xl">{usuarioLogado === null ? '' : usuarioLogado.idiomas[0].idioma}</p>
                        </div>


                    </div>

                    <div className="flex flex-col col-start-1 col-span-2 gap-5">
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4">
                                <p className="text-xl font-semibold">{usuarioLogado === null ? '' : 'SOFTSKILLS'}</p>
                                <div className="flex flex-row gap-2">
                                    <p className="bg-[#859F74] text-white text-md p-1 px-2 rounded-full">{usuarioLogado === null ? '' : usuarioLogado.soft_skills[0]}</p>
                                    <p className="bg-[#859F74] text-white text-md p-1 px-2 rounded-full">{usuarioLogado === null ? '' : usuarioLogado.soft_skills[1]}</p>
                                    {usuarioLogado.soft_skills[2] && <p className="bg-[#859F74] text-white text-md p-1 px-2 rounded-full">{usuarioLogado === null ? '' : usuarioLogado.soft_skills[2]}</p>}
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="flex flex-col col-start-1 col-span-2 gap-5">
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4">
                                <p className="text-xl font-semibold">{usuarioLogado === null ? '' : 'HABILIDADES'}</p>
                                <div className="flex flex-row gap-2">
                                    <p className="bg-[#859F74] text-white text-md p-1 px-3 rounded-full">{usuarioLogado === null ? '' : usuarioLogado.habilidades[0]}</p>
                                    <p className="bg-[#859F74] text-white text-md p-1 px-3 rounded-full">{usuarioLogado === null ? '' : usuarioLogado.habilidades[1]}</p>
                                    {usuarioLogado.habilidades[2] && <p className="bg-[#859F74] text-white text-md p-1 px-3 rounded-full">{usuarioLogado === null ? '' : usuarioLogado.habilidades[2]}</p>}
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col col-start-3 items-center gap-4">
                        <Link to="/dashboard" className="font-semibold bg-white p-5 py-2 rounded-2xl text-[#859F74] border-4 border-[#859F74] flex items-center justify-center shadow hover:bg-[#859F74] hover:text-white transition ">
                            VISUALIZAR DASHBOARD
                        </Link>
                        <Link to='/' onClick={handleClick} className="font-semibold bg-white px-6 py-2 rounded-2xl text-[#ff0000] border-2 border-[#ff0000] flex items-center justify-center shadow hover:bg-[#ff0000] hover:text-white transition w-fit">
                            SAIR
                        </Link>

                    </div>
                </div>




            </div>
        </div>
    )
}

export default MeuPerfil