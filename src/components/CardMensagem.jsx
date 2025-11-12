import FotoExemplo from "../assets/Example.jpg"
import { Link } from "react-router-dom"

function CardMensagem() {
    return (
        <div>
            <Link to="/mensagemDireta">
                <div className="flex flex-col items-center justify-center bg-white rounded-4xl p-5 m-20 shadow-2xl">
                    <div className="flex flex-row gap-10">
                        <img src={FotoExemplo} alt="Usuario1" className="w-25 rounded-full" />

                        <div className="flex flex-col justify-center text-[#859F74] mr-20">
                            <p className="text-4xl">JOÃO ABE</p>
                            <div className="flex flex-row gap-10">
                                <p className="text-xl ml-5">MENSAGEM ALEATÓRIA</p>
                                <p className="text-xl">10h</p>
                            </div>


                        </div>
                    </div>
                </div></Link>


        </div>
    )
}

export default CardMensagem
