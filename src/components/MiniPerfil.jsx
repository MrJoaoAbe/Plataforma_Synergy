import FotoExemplo from "../assets/Example.jpg"
import { Link, Links } from "react-router-dom"

function MiniPerfil({ foto, nome, avaliacoes, seguidores, posts, area, localizacao }) {

    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado")) || {
        darkMode: false
    };

    return (
        <div>
            {usuarioLogado.darkMode === false ?
                // Modo Claro
                <div className="bg-[#EDEBEB] rounded-4xl shadow-2xl flex flex-col items-center w-90 border-4 border-[#859F74] p-10 gap-5">
                    <img src={foto} alt="" className="w-30 rounded-full border-4 border-white" />
                    <h1 className="font-extralight text-4xl text-[#859F74]">{nome}</h1>

                    <div className="flex flex-row gap-10 text-2xl text-[#859F74]">
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold">{avaliacoes}</p>
                            <p className="text-xl">Estrelas</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold">{seguidores}</p>
                            <p className="text-xl">Seguidores</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold">{posts}</p>
                            <p className="text-xl">Posts</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 text-[#859F74] text-xl font-semibold">
                        <p>{area}</p>
                        <p>{localizacao}</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <Link to="/meuPerfil" className="bg-[#859F74] w-60 h-10 rounded-2xl text-white mt-8 mb-0 flex items-center justify-center">
                            PERFIL
                        </Link>
                    </div>
                </div >
                :
                // Modo Escuro
                <div className="bg-[#1A1D1A] rounded-4xl shadow-2xl flex flex-col items-center w-90 p-10 gap-5">
                    <img src={foto} alt="" className="w-30 rounded-full border-4 border-white" />
                    <h1 className="font-extralight text-4xl text-[#ffffff]">{nome}</h1>

                    <div className="flex flex-row gap-10 text-2xl text-[#ffffff]">
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold">{avaliacoes}</p>
                            <p className="text-xl">Estrelas</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold">{seguidores}</p>
                            <p className="text-xl">Seguidores</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-bold">{posts}</p>
                            <p className="text-xl">Posts</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 text-[#ffffff] text-xl font-semibold">
                        <p>{area}</p>
                        <p>{localizacao}</p>
                    </div>

                    <div className="flex items-center justify-center">
                        <Link to="/meuPerfil" className="bg-[#859F74] w-60 h-10 rounded-2xl text-white mt-8 mb-0 flex items-center justify-center">
                            PERFIL
                        </Link>
                    </div>
                </div >}

        </div>
    )
}

export default MiniPerfil