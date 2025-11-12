import FotoExemplo from "../assets/Example.jpg"

function CardPostagens() {
    return (
        <div>
            <div className="flex flex-col items-start justify-start bg-white rounded-4xl p-5 m-20 mt-2 shadow-2xl">
                <div className="flex flex-row gap-10">
                    <div className="flex flex-row items-center gap-5 justify-start">
                        <img src={FotoExemplo} alt="Usuario1" className="w-10 rounded-full" />
                        <p className="text-2xl text-[#859F74]">JOÃO ABE</p>
                    </div>
                </div>

                <div className="flex justify-center w-full">
                    <img src={FotoExemplo} alt="Postagem" className="my-3 w-200 rounded-2xl" />
                </div>

                <div className="flex flex-col items-start gap-2 text-[#859F74] text-md font-semibold">
                    <p>TITULO DA POSTAGEM</p>
                    <p>CONTEÚDO</p>
                </div>

            </div>
        </div>
    )
}

export default CardPostagens
