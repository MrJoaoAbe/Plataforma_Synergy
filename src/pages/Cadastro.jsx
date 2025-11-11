function Cadastro() {
    return (
        <div className="bg-[#DFDFDF] min-h-screen flex items-center justify-center p-20">
            <div className="w-200 bg-white rounded-4xl shadow-2xl flex flex-col">
                <h1 className="font-extralight text-4xl text-[#859F74] p-20 flex items-center ml-10 mt-15">CRIAR CONTA</h1>
                <div>
                    <form className="flex flex-col items-center gap-0">
                        <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Nome" />
                        <div className="flex flex-row gap-8">
                            <input type="number" className="w-60 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Idade" />
                            <input type="text" className="w-60 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Idioma" />
                        </div>
                        <input type="email" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Email" />

                        <div className="flex flex-row gap-8">
                            <input type="text" className="w-60 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Cargo" />
                            <input type="text" className="w-60 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Área" />
                        </div>

                        <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Localização" />
                        <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Adicionar Foto" />
                        <textarea name="resumo" id="resumo" className="w-130 h-50 border-gray-200 border-4 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Resumo"></textarea>
                        <div className="flex flex-row gap-5">
                            <input type="text" className="w-40 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Habilidades Técnicas" />
                            <input type="text" className="w-40 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Habilidades Técnicas" />
                            <input type="text" className="w-40 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Habilidades Técnicas" />
                        </div>
                        <div className="flex flex-row gap-5">
                            <input type="text" className="w-40 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Soft Skills" />
                            <input type="text" className="w-40 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Soft Skills" />
                            <input type="text" className="w-40 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Soft Skills" />
                        </div>

                        <textarea name="experiencia" id="experiencia" className="w-130 h-30 border-gray-200 border-4 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Experiência"></textarea>

                        <div className="flex flex-row gap-5">
                            <input type="text" className="w-40 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Formação" />
                            <input type="text" className="w-30 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Curso" />
                            <input type="date" className="w-20 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Inicio" />
                            <input type="date" className="w-20 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-10" placeholder="Fim" />
                        </div>

                        <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg mb-5" placeholder="Senha" />
                        <input type="text" className="w-130 border-gray-200 border-4 h-13 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" placeholder="Confirmar Senha" />
                        <button className="bg-[#859F74] w-80 h-15 rounded-2xl text-white mt-15 mb-20">CRIAR CONTA</button>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Cadastro