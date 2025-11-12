import { Link } from "react-router-dom"
import FotoExemplo from "../assets/Example.jpg"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";


function MeuPerfil() {

    const [ativado, setAtivado] = useState(false);


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
                    <img src={FotoExemplo} alt="MinhaFoto" className="w-60 rounded-4xl border-4 border-white shadow-xl" />

                    <div className="flex flex-col space-y-2 gap-4 text-[#859F74]">
                        <div className="flex gap-2 items-center text-4xl font-light">
                            <p>JOÃO ABE</p>
                            <p>20</p>
                        </div>
                        <p className="text-2xl">Engenheiro de Software</p>
                        <p className="text-2xl">São Paulo</p>
                        <p className="text-2xl">Desenvolvedor</p>
                    </div>

                    <div className="flex justify-around text-[#859F74] text-center">
                        <div>
                            <p className="font-bold text-3xl">10</p>
                            <p className="text-sm">Estrelas</p>
                        </div>
                        <div>
                            <p className="font-bold text-3xl">230</p>
                            <p className="text-sm">Seguindo</p>
                        </div>
                        <div>
                            <p className="font-bold text-3xl">5</p>
                            <p className="text-sm">Posts</p>
                        </div>
                    </div>

                    <p className="mt-6 col-start-1 col-span-2 text-[#859F74] text-center text-lg">
                        Engenheiro de Software | Transformando ideias em código e código em valor. Curioso por natureza, sempre em busca de novos desafios.
                    </p>

                    <div className="flex flex-col col-start-3 gap-5">
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-1">
                                <p className="text-xl font-semibold">EXPERIÊNCIAS</p>
                                <p className="text-xl">2 anos na Stratesys Tecnologia</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className="text-xl font-semibold">FORMAÇÃO</p>
                                <p className="text-xl">FIAP</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-xl font-semibold">IDIOMAS</p>
                            <p className="text-xl">Inglês</p>
                        </div>


                    </div>

                    <div className="flex flex-col col-start-1 col-span-2 gap-5">
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4">
                                <p className="text-xl font-semibold">SOFTSKILLS</p>
                                <div className="flex flex-row gap-2">
                                    <p className="bg-[#859F74] text-white text-md p-1 px-2 rounded-full">Trabalho em equipe</p>
                                    <p className="bg-[#859F74] text-white text-md p-1 px-2 rounded-full">Empatia</p>
                                    <p className="bg-[#859F74] text-white text-md p-1 px-2 rounded-full">Comunicativo</p>
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className="flex flex-col col-start-1 col-span-2 gap-5">
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4">
                                <p className="text-xl font-semibold">HABILIDADES</p>
                                <div className="flex flex-row gap-2">
                                    <p className="bg-[#859F74] text-white text-md p-1 px-3 rounded-full">PYTHON</p>
                                    <p className="bg-[#859F74] text-white text-md p-1 px-3 rounded-full">SQL</p>
                                    <p className="bg-[#859F74] text-white text-md p-1 px-3 rounded-full">REACT</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col col-start-3 items-center gap-4">
                        <Link to="/dashboard" className="font-semibold bg-white p-5 py-2 rounded-2xl text-[#859F74] border-4 border-[#859F74] flex items-center justify-center shadow hover:bg-[#859F74] hover:text-white transition ">
                            VISUALIZAR DASHBOARD
                        </Link>
                        <button className="font-semibold bg-white px-6 py-2 rounded-2xl text-[#ff0000] border-2 border-[#ff0000] flex items-center justify-center shadow hover:bg-[#ff0000] hover:text-white transition w-fit">
                            SAIR
                        </button>

                    </div>
                </div>




            </div>
        </div>
    )
}

export default MeuPerfil