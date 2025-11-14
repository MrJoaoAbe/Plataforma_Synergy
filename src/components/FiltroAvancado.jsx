import { useState } from "react";
import { useFuncionarios } from "../../FuncionariosContext";

function FiltroAvancado() {

    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado"))

    const [filtroNome, setFiltroNome] = useState('');
    const [filtroArea, setFiltroArea] = useState('');
    const [filtroLocal, setFiltroLocal] = useState('');

    const { funcionarios, setFuncionariosFiltrados } = useFuncionarios();

    function handleSubmit(e) {
        e.preventDefault();

        const filtrados = funcionarios.filter(f =>
            (!filtroNome || f.nome.toLowerCase().includes(filtroNome.toLowerCase())) &&
            (!filtroArea || f.area.toLowerCase().includes(filtroArea.toLowerCase())) &&
            (!filtroLocal || f.localizacao.toLowerCase().includes(filtroLocal.toLowerCase()))
        );


        setFuncionariosFiltrados(filtrados);
    }

    return (
        <div>
            {usuarioLogado.darkMode === true ?
                // Modo Claro
                <div className="bg-[#EDEBEB] rounded-4xl shadow-2xl flex flex-col w-100 border-4 border-[#859F74] p-10 gap-5 mt-10 text-[#859F74]">
                    <p className="font-bold pb-5">BUSCA AVANÇADA</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nome" className="font-semibold">NOME</label>
                            <input
                                name="nome"
                                type="text"
                                value={filtroNome}
                                onChange={(e) => setFiltroNome(e.target.value)}
                                className="w-full border-[#859F74] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="area" className="font-semibold">ÁREA</label>
                            <input
                                name="area"
                                type="text"
                                value={filtroArea}
                                onChange={(e) => setFiltroArea(e.target.value)}
                                className="w-full border-[#859F74] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="local" className="font-semibold">LOCAL</label>
                            <input
                                name="local"
                                type="text"
                                value={filtroLocal}
                                onChange={(e) => setFiltroLocal(e.target.value)}
                                className="w-full border-[#859F74] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg"
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-[#859F74] w-full h-10 rounded-2xl text-white mt-8 mb-0 flex items-center justify-center"
                            >
                                BUSCAR
                            </button>
                        </div>
                    </form>
                </div>
                :
                // Modo Escuro
                <div className="bg-[#1A1D1A] rounded-4xl shadow-2xl flex flex-col w-100 p-10 gap-5 mt-10 text-[#ffffff]">
                    <p className="font-bold pb-5">BUSCA AVANÇADA</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nome" className="font-semibold">NOME</label>
                            <input
                                name="nome"
                                type="text"
                                value={filtroNome}
                                onChange={(e) => setFiltroNome(e.target.value)}
                                className="w-full border-[#ffffff] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="area" className="font-semibold">ÁREA</label>
                            <input
                                name="area"
                                type="text"
                                value={filtroArea}
                                onChange={(e) => setFiltroArea(e.target.value)}
                                className="w-full border-[#ffffff] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="local" className="font-semibold">LOCAL</label>
                            <input
                                name="local"
                                type="text"
                                value={filtroLocal}
                                onChange={(e) => setFiltroLocal(e.target.value)}
                                className="w-full border-[#ffffff] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg"
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-[#859F74] w-full h-10 rounded-2xl text-white mt-8 mb-0 flex items-center justify-center"
                            >
                                BUSCAR
                            </button>
                        </div>
                    </form>
                </div>}

        </div>
    );
}

export default FiltroAvancado;
