import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faShare } from "@fortawesome/free-solid-svg-icons";
import FotoExemplo from "../assets/Example.jpg"
import MensagemRecebida from "../components/MensagemRecebida";
import MensagemEnviada from "../components/MensagemEnviada";
import { useState, useEffect } from "react";

function MensagemDireta() {

    const API = import.meta.env.VITE_FUNCIONARIOS_API;
    const usuarios = "usuarios/";
    const mensagens = "mensagens";
    const { id } = useParams();

    const usuarioLogadoLocalStorage = JSON.parse(localStorage.getItem("UsuarioLogado"));
    const darkModeUsuario = JSON.parse(localStorage.getItem("UsuarioLogado")) || {
        darkMode: false
    };

    const [outroUsuario, setOutroUsuario] = useState({})

    useEffect(() => {
        fetch(`${API}${usuarios}${id}`)
            .then((res) => res.json())
            .then((data) => {
                setOutroUsuario(data);
            })
            .catch((err) => {
                console.error("Erro ao buscar usuário:", err);
            });
    }, [id]);

    const [conteudo, setConteudo] = useState('')

    const [atualizarMensagens, setAtualizarMensagens] = useState(false);

    function enviarMensagem(e) {
        e.preventDefault();
        const agora = new Date()

        if (!conteudo) {
            return
        }
        else {
            const novaMensagem = {
                autor: usuarioLogadoLocalStorage.id,
                destino: id,
                conteudo: conteudo,
                data_envio: agora.toISOString(),
                lida: false
            }

            fetch(`${API}${mensagens}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novaMensagem),
            })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("Erro ao enviar mensagem");
                    }
                    return res.json();
                })
                .then(data => {
                    console.log("mensagem enviada");
                    setConteudo('');
                    setAtualizarMensagens(prev => !prev)
                })
                .catch(err => console.error(err));
        }

    }

    return (
        <div>
            {darkModeUsuario.darkMode === false ?
                // modo claro
                <div className="bg-[#EDEBEB] min-h-screen rounded-4xl shadow-2xl flex flex-col relative">
                    <div className="flex flex-row items-center justify-between px-10">
                        <Link to='/visualizarPerfil'>
                            <div className="flex flex-row justify-center items-center">
                                <img src={outroUsuario.foto} alt="MinhaFoto" className="w-20 h-20 rounded-full border-4 border-white shadow-xl" />
                                <h1 className="font-extralight text-4xl text-[#859F74] p-15 pl-5 flex items-center">
                                    {outroUsuario.nome}
                                </h1>
                            </div>
                        </Link>

                        <Link to="/mensagens" className="bg-[#859F74] px-6 py-2 rounded-2xl text-white">
                            < FontAwesomeIcon icon={faRightFromBracket} className="text-white text-2xl" />
                        </Link>
                    </div>

                    <MensagemRecebida
                        idOutroUsuario={id}
                        fotoOutroUsuario={outroUsuario.foto}
                        atualizarMensagens={atualizarMensagens}
                    />
                    <MensagemEnviada
                        idOutroUsuario={id}
                        atualizarMensagens={atualizarMensagens} />

                    {/* BARRA DE MENSAGEM */}
                    <div className="absolute bottom-10 left-0 right-0 px-10">
                        <form onSubmit={enviarMensagem} className="flex items-center gap-4">
                            <input type="text" className="flex-1 border-2 border-[#859F74] h-12 rounded-full shadow-md px-5 placeholder:text-[#859F74] placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-[#859F74] transition" placeholder="Digite uma mensagem..."
                                onChange={(e) => setConteudo(e.target.value)} value={conteudo} />
                            <button type="submit" className="bg-[#859F74] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md hover:bg-[#6f865f] transition" aria-label="Enviar mensagem">
                                <FontAwesomeIcon icon={faShare} className="text-white text-xl" />
                            </button>
                        </form>
                    </div>
                </div>
                :
                // modo escuro
                <div className="bg-[#1A1D1A] min-h-screen rounded-4xl shadow-2xl flex flex-col relative">
                    <div className="flex flex-row items-center justify-between px-10">
                        <Link to='/visualizarPerfil'>
                            <div className="flex flex-row justify-center items-center">
                                <img src={outroUsuario.foto} alt="MinhaFoto" className="w-20 h-20 rounded-full border-4 border-white shadow-xl" />
                                <h1 className="font-extralight text-4xl text-[#ffffff] p-15 pl-5 flex items-center">
                                    {outroUsuario.nome}
                                </h1>
                            </div>
                        </Link>

                        <Link to="/mensagens" className="bg-[#859F74] px-6 py-2 rounded-2xl text-white">
                            < FontAwesomeIcon icon={faRightFromBracket} className="text-white text-2xl" />
                        </Link>
                    </div>

                    <MensagemRecebida
                        idOutroUsuario={id}
                        fotoOutroUsuario={outroUsuario.foto}
                        atualizarMensagens={atualizarMensagens}
                    />
                    <MensagemEnviada
                        idOutroUsuario={id}
                        atualizarMensagens={atualizarMensagens} />

                    {/* BARRA DE MENSAGEM */}
                    <div className="absolute bottom-10 left-0 right-0 px-10">
                        <form onSubmit={enviarMensagem} className="flex items-center gap-4">
                            <input type="text" className="flex-1 border-2 text-[#859F74] border-[#859F74] h-12 rounded-full shadow-md px-5 placeholder:text-[#859F74] placeholder:text-lg focus:outline-none focus:ring-2 focus:ring-[#859F74] transition" placeholder="Digite uma mensagem..."
                                onChange={(e) => setConteudo(e.target.value)} value={conteudo} />
                            <button type="submit" className="bg-[#859F74] w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md hover:bg-[#6f865f] transition" aria-label="Enviar mensagem">
                                <FontAwesomeIcon icon={faShare} className="text-white text-xl" />
                            </button>
                        </form>
                    </div>
                </div>}

        </div>
    )
}

export default MensagemDireta

