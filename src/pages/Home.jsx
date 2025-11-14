import { Link } from "react-router-dom"
import CardPostagens from "../components/CardPostagens"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { usePostagens } from "../../PostagensContext"

function Home() {

    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado"))

    const API = import.meta.env.VITE_FUNCIONARIOS_API
    const usuarios = 'usuarios'

    const { postagens, setPostagens, postagensFiltradas, setPostagensFiltradas } = usePostagens()

    useEffect(() => {
        fetch(`${API}${usuarios}`)
            .then(res => res.json())
            .then(data => {
                const todasPostagens = data
                    .map(user => user.postagens || [])
                    .flat();
                setPostagens([...todasPostagens].reverse())
                setPostagensFiltradas([...todasPostagens].reverse())
            })

    }, [])

    return (
        <div>
            {usuarioLogado.darkMode === true ?
                // modo claro
                <div className="bg-[#EDEBEB] min-h-screen rounded-4xl shadow-2xl flex flex-col">
                    <div className="flex flex-row items-center justify-between px-10">
                        <h1 className="font-extralight text-4xl text-[#859F74] p-15 flex items-center">
                            HOME
                        </h1>
                        <Link to="/criarPost" className="bg-[#859F74] px-6 py-2 rounded-2xl text-white">
                            CRIAR POST
                        </Link>
                    </div>

                    {postagensFiltradas
                        .map(post => (
                            < CardPostagens
                                key={post.id}
                                id={post.id}
                                autor={post.autor}
                                foto={post.foto_autor}
                                titulo={post.titulo}
                                mensagem={post.mensagem}
                                imagem={post.imagem}
                            />
                        ))
                    }
                </div>
                :
                //dark mode
                <div className="bg-[#1A1D1A] min-h-screen rounded-4xl shadow-2xl flex flex-col">
                    <div className="flex flex-row items-center justify-between px-10">
                        <h1 className="font-extralight text-4xl text-[#ffffff] p-15 flex items-center">
                            HOME
                        </h1>
                        <Link to="/criarPost" className="bg-[#859F74] px-6 py-2 rounded-2xl text-white">
                            CRIAR POST
                        </Link>
                    </div>

                    {postagensFiltradas
                        .map(post => (
                            < CardPostagens
                                key={post.id}
                                id={post.id}
                                autor={post.autor}
                                foto={post.foto_autor}
                                titulo={post.titulo}
                                mensagem={post.mensagem}
                                imagem={post.imagem}
                            />
                        ))
                    }
                </div>}

        </div>
    )
}

export default Home
