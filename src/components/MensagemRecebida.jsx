import FotoExemplo from "../assets/Example.jpg"
import { useState, useEffect } from "react";

function MensagemRecebida({ idOutroUsuario, fotoOutroUsuario }) {

    const API = import.meta.env.VITE_FUNCIONARIOS_API;
    const mensagens = "mensagens/";


    const usuarioLogadoLocalStorage = JSON.parse(localStorage.getItem("UsuarioLogado")) || {
        darkMode: false
    };

    const [mensagensParaMim, setMensagensParaMim] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {

        fetch(`${API}${mensagens}`)
            .then(res => res.json())
            .then(todasMensagens => {

                const filtradas = todasMensagens.filter(msg =>
                    msg.autor === idOutroUsuario.toString() &&
                    msg.destino === usuarioLogadoLocalStorage.id.toString()
                );

                setMensagensParaMim(filtradas);
                setCarregando(false);
            })
            .catch(err => console.error("Erro ao buscar mensagens:", err));

    }, [API, idOutroUsuario]);

    if (carregando) return <p>Carregando mensagens...</p>;

    return (
        <div>
            {mensagensParaMim.map(msg => {
                const dataMensagem = new Date(msg.data_envio);
                const agora = new Date();
                const diferencaMs = agora - dataMensagem;
                const diferencaHoras = Math.floor(diferencaMs / (1000 * 60 * 60));

                return (
                    <div key={msg.id} className="pl-10 flex flex-row items-center gap-5 my-5">
                        <img src={fotoOutroUsuario} className="w-16 h-16 rounded-full shadow-xl" />
                        <div className="flex flex-row gap-3 bg-white p-2 px-4 rounded-full shadow-2xl ">
                            <p className="text-[#859F74] text-xl">{msg.conteudo}</p>
                            <p className="text-[#859F74] text-xl">{diferencaHoras}h</p>
                        </div>
                    </div>
                );
            })}

        </div>
    )
}

export default MensagemRecebida