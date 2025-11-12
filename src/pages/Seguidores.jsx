import CardSeguindo from "../components/CardSeguindo"

function Seguidores() {
    return (
        <div className="bg-[#EDEBEB] min-h-screen rounded-4xl shadow-2xl flex flex-col">
            <h1 className="font-extralight text-4xl text-[#859F74] p-15 pb-5 flex items-center ml-10">SEGUIDORES</h1>

            <CardSeguindo />
        </div>
    )
}

export default Seguidores