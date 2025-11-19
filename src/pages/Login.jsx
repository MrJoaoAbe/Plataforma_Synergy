import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const API = import.meta.env.VITE_FUNCIONARIOS_API
    const usuarios = 'usuarios'

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

        
    function handleSubmit(e) {
        e.preventDefault();

        if (!email || !senha) {
            alert("Preencha todos os campos");
            return;
        }

        fetch(`${API}${usuarios}`)
            .then(res => res.json())
            .then(data => {
                const usuarioEncontrado = data.find(
                    u => u.email === email && u.senha === senha
                );

                if (!usuarioEncontrado) {
                    alert("Senha ou Email estão errados");
                } else {
                    alert(`Bem-vindo ${usuarioEncontrado.nome}`);
                    localStorage.setItem("UsuarioLogado", JSON.stringify(usuarioEncontrado));
                    navigate("/");
                }
            })
            .catch(err => console.error("Erro ao buscar usuários:", err));
    }

    return (
        <div className="bg-[#DFDFDF] min-h-screen flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 flex flex-col">

                <h1 className="font-light text-4xl text-[#859F74] text-center mb-10 tracking-wide">
                    LOGIN
                </h1>

                <form 
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6 w-full"
                >

                    <input
                        type="email"
                        className="w-full border-2 border-gray-300 h-14 rounded-2xl shadow-md pl-4 placeholder:text-[#859F74] placeholder:text-lg"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        className="w-full border-2 border-gray-300 h-14 rounded-2xl shadow-md pl-4 placeholder:text-[#859F74] placeholder:text-lg"
                        placeholder="Senha"
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="bg-[#859F74] w-full h-14 rounded-2xl text-white text-lg shadow-lg active:scale-95 transition"
                    >
                        ENTRAR
                    </button>

                    <p className="text-[#859F74] text-center text-base">
                        Não possui uma conta? Clique{" "}
                        <Link to="/cadastro" className="font-bold underline">
                            AQUI
                        </Link>{" "}
                        para criar uma.
                    </p>

                </form>
            </div>
        </div>
    )
}

export default Login


