import CardMensagem from "../components/CardMensagem"

function Mensagens() {
    return (
        <div className="bg-[#EDEBEB] min-h-screen rounded-4xl shadow-2xl flex flex-col">
            <h1 className="font-extralight text-4xl text-[#859F74] p-15 flex items-center ml-10">HISTÓRICO DE MENSAGENS</h1>

            <CardMensagem />
        </div>
    )
}

export default Mensagens