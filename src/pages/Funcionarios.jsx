import CardFuncionario from "../components/CardFuncionario"

function Funcionarios() {
    return (
        <div>
            <div className="bg-[#EDEBEB] min-h-screen rounded-4xl shadow-2xl flex flex-col">
                <h1 className="font-extralight text-4xl text-[#859F74] p-15 pb-5 flex items-center ml-10">FUNCIONÁRIOS</h1>

                <CardFuncionario />
            </div>

        </div>
    )
}

export default Funcionarios