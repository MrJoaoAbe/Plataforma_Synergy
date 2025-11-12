import FotoExemplo from "../assets/Example.jpg"
import { Link } from "react-router-dom"

function CardSeguindo() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-white rounded-4xl p-10 m-20 shadow-2xl">
                <div className="flex flex-row gap-10">
                    <img src={FotoExemplo} alt="Usuario1" className="w-25 rounded-full" />

                    <div className="flex flex-col text-[#859F74]">
                        <p className="text-4xl">JOÃO ABE</p>
                        <p className="text-2xl">Engenheiro de Software</p>
                        <p className="text-2xl">São Paulo</p>
                        <div className="flex flex-row gap-5">

                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-4 mt-5">
                    <Link to="/visualizarPerfil" className=" bg-white py-1 w-60 rounded-2xl text-[#859F74] border-2 border-[#859F74] flex items-center justify-center shadow hover:bg-[#859F74] hover:text-white transition ">
                        PERFIL
                    </Link>
                    <button to="/mensagens" className=" bg-white py-1 w-60 rounded-2xl text-[#ff0000] border-2 border-[#ff0000] flex items-center justify-center shadow hover:bg-[#ff0000] hover:text-white transition ">
                        DEIXAR DE SEGUIR
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CardSeguindo
