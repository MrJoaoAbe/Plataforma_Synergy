function FiltroAvancado() {
    return (
        <div className="bg-[#EDEBEB] rounded-4xl shadow-2xl flex flex-col w-100 border-4 border-[#859F74] p-10 gap-5 mt-10 text-[#859F74]">
            <p className="font-bold pb-5">BUSCA AVANÇADA</p>

            <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="font-semibold">NOME</label>
                    <input name="nome" type="text" className="w-full border-[#859F74] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="area" className="font-semibold">ÁREA</label>
                    <input name="area" type="text" className="w-full border-[#859F74] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="local" className="font-semibold">LOCAL</label>
                    <input name="local" type="text" className="w-full border-[#859F74] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" />
                </div>

                <div className="flex flex-row gap-5 ml-5">
                    <input type="radio" id="melhoresDaArea" className="accent-[#859F74] w-4" />
                    <label htmlFor="local" className="font-semibold">Melhores Avaliados</label>
                </div>

                <div className="flex items-center justify-center">
                    <button className="bg-[#859F74] w-full h-10 rounded-2xl text-white mt-8 mb-0 flex items-center justify-center">
                        PERFIL
                    </button>
                </div>
            </form>
        </div >
    )
}

export default FiltroAvancado