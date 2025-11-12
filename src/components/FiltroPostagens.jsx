function FiltroPostagens() {
    return (
        <div className="bg-[#EDEBEB] rounded-4xl shadow-2xl flex flex-col w-100 border-4 border-[#859F74] p-10 gap-5 mt-10 text-[#859F74]">
            <p className="font-bold pb-5">FILTRAR POSTAGENS</p>

            <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="font-semibold">AUTOR</label>
                    <input name="nome" type="text" className="w-full border-[#859F74] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="area" className="font-semibold">TÍTULO</label>
                    <input name="area" type="text" className="w-full border-[#859F74] border-4 h-10 rounded-3xl shadow-2xl pl-5 placeholder:text-[#859F74] placeholder:text-lg" />
                </div>

                <div className="flex items-center justify-center">
                    <button className="bg-[#859F74] w-full h-10 rounded-2xl text-white mt-8 mb-0 flex items-center justify-center">
                        FILTRAR
                    </button>
                </div>
            </form>
        </div >
    )
}

export default FiltroPostagens