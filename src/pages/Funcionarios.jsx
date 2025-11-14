import CardFuncionario from "../components/CardFuncionario";
import { useEffect } from "react";
import { useFuncionarios } from "../../FuncionariosContext";

function Funcionarios() {

    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado")) || {
        darkMode: false
    };

    const API = import.meta.env.VITE_FUNCIONARIOS_API;
    const usuarios = 'usuarios';

    const { funcionarios, setFuncionarios, funcionariosFiltrados } = useFuncionarios();

    useEffect(() => {
        fetch(`${API}${usuarios}`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setFuncionarios(data);
                }
            });
    }, []);

    const lista = funcionariosFiltrados !== null ? funcionariosFiltrados : funcionarios;

    return (
        <div>
            {usuarioLogado.darkMode === false ?
                //modo claro
                <div className="bg-[#EDEBEB] min-h-screen rounded-4xl shadow-2xl flex flex-col">
                    <h1 className="font-extralight text-4xl text-[#859F74] p-15 pb-5 flex items-center ml-10">
                        FUNCIONÁRIOS
                    </h1>

                    {lista && lista.length > 0 ? (
                        lista.map(funci => (
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
                :
                // modo escuro
                <div className="bg-[#1A1D1A] min-h-screen rounded-4xl shadow-2xl flex flex-col">
                    <h1 className="font-extralight text-4xl text-[#ffffff] p-15 pb-5 flex items-center ml-10">
                        FUNCIONÁRIOS
                    </h1>

                    {lista && lista.length > 0 ? (
                        lista.map(funci => (
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
                </div>}

        </div>
    );
}

export default Funcionarios;
