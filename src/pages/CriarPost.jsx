import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Home() {
    return (
        <div className="bg-[#EDEBEB] pb-10 rounded-4xl shadow-2xl flex flex-col">
            <div className="flex flex-row items-center justify-between px-10">
                <h1 className="font-extralight text-4xl text-[#859F74] p-15 flex items-center">
                    CRIAR POST
                </h1>
                <Link to="/" className="bg-[#859F74] px-6 py-2 rounded-2xl text-white">
                    < FontAwesomeIcon icon={faRightFromBracket} className="text-white text-2xl" />
                </Link>
            </div>

            <div className="flex flex-col gap-10 justify-center items-center">
                <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" placeholder="Titulo da postagem" />
                <textarea type="text" className="w-130 h-80 border-gray-200 border-4 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" placeholder="Mensagem" />
                <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" placeholder="URL da imagem" />
                <button className="bg-[#859F74] w-80 h-15 rounded-2xl text-white mt-15 mb-0">CRIAR POSTAGEM</button>
            </div>


        </div>
    )
}

export default Home
