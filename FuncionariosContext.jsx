import { createContext, useContext, useState } from "react";

const FuncionariosContext = createContext();

export const useFuncionarios = () => useContext(FuncionariosContext);

export function FuncionariosProvider({ children }) {
    const [funcionarios, setFuncionarios] = useState([]);
    const [funcionariosFiltrados, setFuncionariosFiltrados] = useState(null);

    return (
        <FuncionariosContext.Provider value={{
            funcionarios,
            setFuncionarios,
            funcionariosFiltrados,
            setFuncionariosFiltrados
        }}>
            {children}
        </FuncionariosContext.Provider>
    )
}
