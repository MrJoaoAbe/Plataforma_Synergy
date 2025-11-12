import FotoExemplo from "../assets/Example.jpg"

function MensagemRecebida() {
    return (
        <div>
            <div className="pl-10 flex flex-row items-center gap-5 my-5">
                <img src={FotoExemplo} alt="MinhaFoto" className="w-16 h-16 rounded-full shadow-xl" />
                <div className="flex flex-row gap-3 bg-white p-2 px-4 rounded-full shadow-2xl ">
                    <p className="text-[#859F74] text-xl">MENSAGEM ALEATÓRIA</p>
                    <p className="text-[#859F74] text-xl">10h</p>
                </div>

            </div>
        </div>
    )
}

export default MensagemRecebida