import { useState } from "react";
import { usePostagens } from "../../PostagensContext";

function FiltroPostagens() {

    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado")) || {
        darkMode: false
    };

    const [filtrarAutor, setFiltrarAutor] = useState('');
    const [filtrarTitulo, setFiltrarTitulo] = useState('');

    const { postagens, setPostagensFiltradas } = usePostagens();

    function handleSubmit(e) {
        e.preventDefault();
        const filtradas = postagens.filter(post =>
            post.autor.toLowerCase().includes(filtrarAutor.toLowerCase()) &&
            post.titulo.toLowerCase().includes(filtrarTitulo.toLowerCase())
        );
        setPostagensFiltradas(filtradas);
    }

    return (
        <div className="hidden sm:block">
            {usuarioLogado.darkMode === false ?
                // Modo Claro
                <div className="bg-[#EDEBEB] rounded-4xl shadow-2xl flex flex-col w-100 border-4 border-[#859F74] p-10 gap-5 mt-10 text-[#859F74]">
                    <p className="font-bold pb-5">FILTRAR POSTAGENS</p>

                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nome" className="font-semibold">AUTOR</label>
                            <input
                                name="nome"
                                type="text"
                                className="w-full border-[#859F74] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg"
                                onChange={(e) => setFiltrarAutor(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="area" className="font-semibold">TÍTULO</label>
                            <input
                                name="area"
                                type="text"
                                className="w-full border-[#859F74] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg"
                                onChange={(e) => setFiltrarTitulo(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-[#859F74] w-full h-10 rounded-2xl text-white mt-8 mb-0 flex items-center justify-center"
                            >
                                FILTRAR
                            </button>
                        </div>
                    </form>
                </div>
                :
                // Modo Escuro
                <div className="bg-[#1A1D1A] rounded-4xl shadow-2xl flex flex-col w-100 p-10 gap-5 mt-10 text-[#f7f7f7]">
                    <p className="font-bold pb-5">FILTRAR POSTAGENS</p>

                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nome" className="font-semibold">AUTOR</label>
                            <input
                                name="nome"
                                type="text"
                                className="w-full border-[#ffffff] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg"
                                onChange={(e) => setFiltrarAutor(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="area" className="font-semibold">TÍTULO</label>
                            <input
                                name="area"
                                type="text"
                                className="w-full border-[#ffffff] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg"
                                onChange={(e) => setFiltrarTitulo(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-[#859F74] w-full h-10 rounded-2xl text-white mt-8 mb-0 flex items-center justify-center"
                            >
                                FILTRAR
                            </button>
                        </div>
                    </form>
                </div>}

        </div>
    );
}

export default FiltroPostagens;
