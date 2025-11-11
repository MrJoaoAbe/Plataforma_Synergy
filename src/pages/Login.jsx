import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="bg-[#DFDFDF] min-h-screen flex items-center justify-center">
            <div className="w-200 h-200 bg-white rounded-4xl shadow-2xl flex flex-col">
                <h1 className="font-extralight text-4xl text-[#859F74] p-20 flex items-center ml-10 mt-15">LOGIN</h1>
                <div>
                    <form className="flex flex-col items-center gap-5">
                        <input type="email" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Email" />
                        <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" placeholder="Senha" />
                        <button className="bg-[#859F74] w-80 h-15 rounded-2xl text-white mt-15 mb-0">ENTRAR</button>
                        <p className="pt-0 text-[#859F74]">Não possui uma conta, clique <Link to="/cadastro">AQUI</Link> para se criar uma</p>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login

