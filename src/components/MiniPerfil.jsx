import FotoExemplo from "../assets/Example.jpg"
import { Link, Links } from "react-router-dom"

function MiniPerfil() {
    return (
        <div className="bg-[#EDEBEB] h-130 rounded-4xl shadow-2xl flex flex-col items-center w-90 border-4 border-[#859F74] p-10 gap-5">
            <img src={FotoExemplo} alt="" className="w-30 rounded-full border-4 border-white" />
            <h1 className="font-extralight text-4xl text-[#859F74]">JOÃO ABE</h1>

            <div className="flex flex-row gap-10 text-2xl text-[#859F74]">
                <div className="flex flex-col justify-center items-center">
                    <p className="font-bold">10</p>
                    <p className="text-xl">Estrelas</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="font-bold"> 230</p>
                    <p className="text-xl">Seguindo</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="font-bold">5</p>
                    <p className="text-xl">Posts</p>
                </div>
            </div>

            <div className="flex flex-col items-start gap-2 text-[#859F74] text-xl font-semibold">
                <p>Engenheiro de Software</p>
                <p>São Paulo</p>
            </div>

            <div className="flex items-center justify-center">
                <Link to="/meuPerfil" className="bg-[#859F74] w-60 h-10 rounded-2xl text-white mt-8 mb-0 flex items-center justify-center">
                    PERFIL
                </Link>
            </div>


        </div >
    )
}

export default MiniPerfil