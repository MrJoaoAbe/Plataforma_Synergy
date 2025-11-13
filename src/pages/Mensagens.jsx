import CardMensagem from "../components/CardMensagem"
import { useState, useEffect } from "react";

function Mensagens() {

    const API = import.meta.env.VITE_FUNCIONARIOS_API;
    const mensagens = "mensagens";
    const usuarios = "usuarios";

    const [ultimaMensagem, setUltimaMensagem] = useState(null);
    const [autorMensagem, setAutorMensagem] = useState(null);

    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado"));
    const dataAtual = Date.now();

    useEffect(() => {
        fetch(`${API}${mensagens}`)
            .then((res) => res.json())
            .then((data) => {
                const mensagemRecebida = data.filter(
                    (msg) => msg.destino === usuarioLogado.id
                );

                if (mensagemRecebida.length === 0) return;

                mensagemRecebida.sort(
                    (a, b) => new Date(b.data_envio) - new Date(a.data_envio)
                );

                const ultima = mensagemRecebida[0];
                setUltimaMensagem(ultima);

                fetch(`${API}${usuarios}`)
                    .then((res) => res.json())
                    .then((usuarios) => {
                        const autor = usuarios.find(u => u.id === ultima.autor);
                        setAutorMensagem(autor);
                    })
                    .catch((err) => console.error("Erro ao carregar usuários:", err));
            })
            .catch((err) => console.error("Erro ao carregar mensagens:", err));
    }, [API, usuarioLogado.id]);

    const horasAtras = ultimaMensagem
        ? Math.floor((dataAtual - new Date(ultimaMensagem.data_envio).getTime()) / 1000 / 60 / 60)
        : null;

    return (
        <div className="bg-[#EDEBEB] min-h-screen rounded-4xl shadow-2xl flex flex-col">
            <h1 className="font-extralight text-4xl text-[#859F74] p-15 flex items-center ml-10">HISTÓRICO DE MENSAGENS</h1>

            {ultimaMensagem && autorMensagem ? (
                <CardMensagem
                    conteudo={ultimaMensagem.conteudo}
                    id={ultimaMensagem.id}
                    nome={autorMensagem.nome}
                    foto={autorMensagem.foto}
                    horasAtras={horasAtras}
                />
            ) : (
                <p className="ml-10 mt-5 text-gray-500">Nenhuma mensagem recebida.</p>
            )}
        </div>
    )
}

export default Mensagens;
