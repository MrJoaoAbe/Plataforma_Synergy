import CardFuncionario from "../components/CardFuncionario"
import { useEffect, useState } from "react"

function Funcionarios() {

    const API = import.meta.env.VITE_FUNCIONARIOS_API
    const usuarios = 'usuarios'

    function erro() {
        alert("Nenhuma informação encontrada")
    }

    const [funcionarios, setFuncionarios] = useState([])

    useEffect(() => {
        fetch(`${API}${usuarios}`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setFuncionarios(data)
                }
            })
    }, [])

    return (
        <div>
            <div className="bg-[#EDEBEB] min-h-screen rounded-4xl shadow-2xl flex flex-col">
                <h1 className="font-extralight text-4xl text-[#859F74] p-15 pb-5 flex items-center ml-10">FUNCIONÁRIOS</h1>


                {funcionarios.length > 0 ? (
                    funcionarios.map(funci => (
                        <CardFuncionario
                            key={funci.id}
                            id={funci.id}
                            foto={funci.foto}
                            nome={funci.nome}
                            area={funci.area}
                            localizacao={funci.localizacao}
                            habilidade1={funci.habilidades?.[0]}
                            habilidade2={funci.habilidades?.[1]}
                            habilidade3={funci.habilidades?.[2]}
                        />
                    ))
                ) : (
                    <p className="ml-10 text-gray-500">Nenhum funcionário encontrado.</p>
                )}
            </div>

        </div>
    )
}

export default Funcionarios