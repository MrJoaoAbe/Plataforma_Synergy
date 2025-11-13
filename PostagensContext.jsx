import { createContext, useContext, useState } from "react";

const PostagensContext = createContext();

export const usePostagens = () => useContext(PostagensContext);

export function PostagensProvider({ children }) {
    const [postagens, setPostagens] = useState([]);
    const [postagensFiltradas, setPostagensFiltradas] = useState([]);

    return (
        <PostagensContext.Provider value={{
            postagens,
            setPostagens,
            postagensFiltradas,
            setPostagensFiltradas
        }}>
            {children}
        </PostagensContext.Provider>
    )
}
