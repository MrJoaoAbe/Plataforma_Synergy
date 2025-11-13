import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {

    const API = import.meta.env.VITE_FUNCIONARIOS_API
    const usuarios = 'usuarios'

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const usuariosExistentes = JSON.parse(localStorage.getItem("Usuarios")) || [];

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
        <div className="bg-[#DFDFDF] min-h-screen flex items-center justify-center">
            <div className="w-200 h-200 bg-white rounded-4xl shadow-2xl flex flex-col">
                <h1 className="font-extralight text-4xl text-[#859F74] p-20 flex items-center ml-10 mt-15">LOGIN</h1>
                <div>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
                        <input type="email" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" placeholder="Senha"
                            onChange={(e) => setSenha(e.target.value)} />
                        <button type="submit" className="bg-[#859F74] w-80 h-15 rounded-2xl text-white mt-15 mb-0">ENTRAR</button>
                        <p className="pt-0 text-[#859F74]">Não possui uma conta, clique <Link to="/cadastro" className="font-black">AQUI</Link> para se criar uma</p>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login

