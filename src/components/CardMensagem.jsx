import FotoExemplo from "../assets/Example.jpg"
import { Link } from "react-router-dom"
import profileSemFoto from '../assets/profileSemFoto.png'

function CardMensagem({ id, conteudo, nome, foto, horasAtras }) {

    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado")) || {
        darkMode: false
    };

    return (
        <div>
            {usuarioLogado.darkMode === false ?
                //modo claro
                <div>
                    <Link to={`/mensagemDireta/${id}`}>
                        <div className="flex flex-col items-center justify-center bg-white rounded-4xl p-5 m-20 mt-3 shadow-2xl">
                            <div className="flex flex-row gap-10">
                                <img src={foto} className="w-20 rounded-full" />

                                <div className="flex flex-col justify-center text-[#859F74] mr-20">
                                    <p className="text-4xl">{nome}</p>
                                    <div className="flex flex-row gap-10">
                                        <p className="text-xl ml-5">{conteudo}</p>
                                        <p className="text-xl">{horasAtras}h</p>
                                    </div>


                                </div>
                            </div>
                        </div></Link>

                </div>
                :
                //modo escuro
                <div>
                    <Link to={`/mensagemDireta/${id}`}>
                        <div className="flex flex-col items-center justify-center bg-[#111411] rounded-4xl p-5 m-20 mt-3 shadow-2xl">
                            <div className="flex flex-row gap-10">
                                <img src={foto} className="w-20 rounded-full" />

                                <div className="flex flex-col justify-center text-[#ffffff] mr-20">
                                    <p className="text-4xl">{nome}</p>
                                    <div className="flex flex-row gap-10">
                                        <p className="text-xl ml-5">{conteudo}</p>
                                        <p className="text-xl">{horasAtras}h</p>
                                    </div>


                                </div>
                            </div>
                        </div></Link>

                </div>}

        </div>
    )
}

export default CardMensagem
