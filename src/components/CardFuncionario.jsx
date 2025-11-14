import FotoExemplo from "../assets/Example.jpg"
import { Link } from "react-router-dom"
import profileSemFoto from '../assets/profileSemFoto.png'

function CardFuncionario({ key, id, foto, nome, habilidade1, habilidade2, habilidade3, localizacao, area }) {

    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado")) || {
        darkMode: false
    };

    return (

        <div>
            {usuarioLogado.darkMode === false ?
                //modo claro
                <div className="flex flex-col items-center justify-center bg-white rounded-4xl p-10 m-20 mb-0 shadow-2xl">
                    <div className="flex flex-row gap-5">
                        <img src={foto === null ? profileSemFoto : foto} className="w-25 rounded-full" />

                        <div className="flex flex-col text-[#859F74]">
                            <p className="text-2xl">{nome}</p>
                            <div className="flex flex-row gap-5">
                                <p className="text-2xl">{area}</p>
                                <p className="text-2xl">{localizacao}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-2 h-6 ml-20 mt-2">
                        <p className="bg-[#859F74] text-white text-md p-1 px-7 rounded-full">{habilidade1}</p>
                        <p className="bg-[#859F74] text-white text-md p-1 px-7 rounded-full">{habilidade2}</p>
                        {habilidade3 &&
                            (<p className="bg-[#859F74] text-white text-md p-1 px-7 rounded-full">{habilidade3}</p>)
                        }

                    </div>

                    <div className="flex flex-row items-center gap-4 mt-5">
                        <Link to={`/visualizarPerfil/${id}`} className=" bg-white py-1 w-60 rounded-2xl text-[#859F74] border-2 border-[#859F74] flex items-center justify-center shadow hover:bg-[#859F74] hover:text-white transition ">
                            PERFIL
                        </Link>
                        <Link to="/mensagemDireta" className=" bg-white py-1 w-60 rounded-2xl text-[#859F74] border-2 border-[#859F74] flex items-center justify-center shadow hover:bg-[#859F74] hover:text-white transition ">
                            ENVIAR MENSAGEM
                        </Link>
                    </div>
                </div>
                :
                //modo escuro
                <div className="flex flex-col items-center justify-center bg-[#111411] rounded-4xl p-10 m-20 mb-0 shadow-2xl">
                    <div className="flex flex-row gap-5">
                        <img src={foto === null ? profileSemFoto : foto} className="w-25 rounded-full" />

                        <div className="flex flex-col text-[#ffffff]">
                            <p className="text-2xl">{nome}</p>
                            <div className="flex flex-row gap-5">
                                <p className="text-2xl">{area}</p>
                                <p className="text-2xl">{localizacao}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-2 h-6 ml-20 mt-2">
                        <p className="bg-[#859F74] text-white text-md p-1 px-7 rounded-full">{habilidade1}</p>
                        <p className="bg-[#859F74] text-white text-md p-1 px-7 rounded-full">{habilidade2}</p>
                        {habilidade3 &&
                            (<p className="bg-[#859F74] text-white text-md p-1 px-7 rounded-full">{habilidade3}</p>)
                        }

                    </div>

                    <div className="flex flex-row items-center gap-4 mt-5">
                        <Link to={`/visualizarPerfil/${id}`} className=" bg-[#859F74] py-1 w-60 rounded-2xl text-[#ffffff] border-2 border-[#859F74] flex items-center justify-center shadow hover:bg-[#ffffff] hover:text-[#859F74] transition ">
                            PERFIL
                        </Link>
                        <Link to="/mensagemDireta" className=" bg-[#859F74] py-1 w-60 rounded-2xl text-[#ffffff] border-2 border-[#859F74] flex items-center justify-center shadow hover:bg-[#ffffff] hover:text-[#859F74] transition ">
                            ENVIAR MENSAGEM
                        </Link>
                    </div>
                </div>}

        </div>

    )
}

export default CardFuncionario
