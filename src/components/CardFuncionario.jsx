import FotoExemplo from "../assets/Example.jpg"
import { Link } from "react-router-dom"

function CardFuncionario() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-white rounded-4xl p-10 m-20 shadow-2xl">
                <div className="flex flex-row gap-5">
                    <img src={FotoExemplo} alt="Usuario1" className="w-25 rounded-full" />

                    <div className="flex flex-col text-[#859F74]">
                        <p className="text-2xl">JOÃO ABE</p>
                        <div className="flex flex-row gap-5">
                            <p className="text-2xl">Engenheiro de Software</p>
                            <p className="text-2xl">São Paulo</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-2 ml-20">
                    <p className="bg-[#859F74] text-white text-md p-1 px-7 rounded-full">PYTHON</p>
                    <p className="bg-[#859F74] text-white text-md p-1 px-7 rounded-full">SQL</p>
                    <p className="bg-[#859F74] text-white text-md p-1 px-7 rounded-full">REACT</p>
                </div>

                <div className="flex flex-row items-center gap-4 mt-5">
                    <Link to="/visualizarPerfil" className=" bg-white py-1 w-60 rounded-2xl text-[#859F74] border-2 border-[#859F74] flex items-center justify-center shadow hover:bg-[#859F74] hover:text-white transition ">
                        PERFIL
                    </Link>
                    <Link to="/mensagemDireta" className=" bg-white py-1 w-60 rounded-2xl text-[#859F74] border-2 border-[#859F74] flex items-center justify-center shadow hover:bg-[#859F74] hover:text-white transition ">
                        ENVIAR MENSAGEM
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default CardFuncionario
