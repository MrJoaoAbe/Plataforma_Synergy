import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate()


    const API = import.meta.env.VITE_FUNCIONARIOS_API
    const usuarios = 'usuarios'

    const [criarPost, setCriarPost] = useState([])

    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado"));


    const [titulo, setTitulo] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [imagem, setImagem] = useState('')



    function handleSubmit(e) {
        e.preventDefault()

        if (!usuarioLogado) {
            alert("Voce precisa estar logado para fazer uma postagem")
            navigate('/login')
        }
        else {

            const novoPost = {
                autor: usuarioLogado.nome,
                foto_autor: usuarioLogado.foto,
                titulo: titulo,
                mensagem: mensagem,
                imagem: imagem,
            }

            fetch(`${API}${usuarios}/${usuarioLogado.id}`)
                .then(res => res.json())
                .then(usuario => {

                    const usuarioAtualizado = {
                        ...usuario,
                        postagens: [...(usuario.postagens || []), novoPost]
                    };


                    return fetch(`${API}${usuarios}/${usuarioLogado.id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(usuarioAtualizado),
                    });
                })
                .then(res => {
                    if (!res.ok) {
                        throw new Error("Erro ao atualizar o usuário");
                    }
                    alert("Post criado com sucesso!");
                })
                .catch(err => console.error("Erro ao criar post:", err));

            navigate('/')
        }


    }

    return (
        <div>
            {usuarioLogado.darkMode === true ?
                // modo claro
                <div className="bg-[#EDEBEB] pb-10 rounded-4xl shadow-2xl flex flex-col">
                    <div className="flex flex-row items-center justify-between px-10">
                        <h1 className="font-extralight text-4xl text-[#859F74] p-15 flex items-center">
                            CRIAR POST
                        </h1>
                        <Link to="/" className="bg-[#859F74] px-6 py-2 rounded-2xl text-white">
                            < FontAwesomeIcon icon={faRightFromBracket} className="text-white text-2xl" />
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-10 justify-center items-center">
                        <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" placeholder="Titulo da postagem" required
                            onChange={e => setTitulo(e.target.value)} />
                        <textarea type="text" className="w-130 h-80 border-gray-200 border-4 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" placeholder="Mensagem" required
                            onChange={e => setMensagem(e.target.value)} />
                        <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" placeholder="URL da imagem"
                            onChange={e => setImagem(e.target.value)} />
                        <button type="submit" className="bg-[#859F74] w-80 h-15 rounded-2xl text-white mt-15 mb-0">CRIAR POSTAGEM</button>
                    </form>
                </div>
                :
                //modo escuro
                <div className="bg-[#1A1D1A] pb-10 rounded-4xl shadow-2xl flex flex-col">
                    <div className="flex flex-row items-center justify-between px-10">
                        <h1 className="font-extralight text-4xl text-[#ffffff] p-15 flex items-center">
                            CRIAR POST
                        </h1>
                        <Link to="/" className="bg-[#859F74] px-6 py-2 rounded-2xl text-white">
                            < FontAwesomeIcon icon={faRightFromBracket} className="text-white text-2xl" />
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-10 justify-center items-center">
                        <input type="text" className="w-130 border-white border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#ffffff] placeholder:text-lg" placeholder="Titulo da postagem" required
                            onChange={e => setTitulo(e.target.value)} />
                        <textarea type="text" className="w-130 h-80 border-white  border-4 rounded-3xl shadow-2xl pl-5 placeholder:text-[#ffffff] placeholder:text-lg" placeholder="Mensagem" required
                            onChange={e => setMensagem(e.target.value)} />
                        <input type="text" className="w-130 border-white  border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#ffffff] placeholder:text-lg" placeholder="URL da imagem"
                            onChange={e => setImagem(e.target.value)} />
                        <button type="submit" className="bg-[#859F74] w-80 h-15 rounded-2xl text-white mt-15 mb-0">CRIAR POSTAGEM</button>
                    </form>

                </div>}

        </div>
    )
}

export default Home
