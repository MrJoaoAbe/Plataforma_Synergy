import FotoExemplo from "../assets/Example.jpg"

function CardPostagens({ key, id, autor, foto, titulo, mensagem, imagem }) {

    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado"))

    return (
        <div>
            {usuarioLogado.darkMode === true ?
                // modo claro
                <div>
                    <div className="flex flex-col items-start justify-start bg-white rounded-4xl p-5 mt-5 mx-10  shadow-2xl">
                        <div className="flex flex-row gap-10">
                            <div className="flex flex-row items-center gap-5 justify-start">
                                <img src={foto ? foto : FotoExemplo} alt="Usuario1" className="w-10 rounded-full" />
                                <p className="text-2xl text-[#859F74]">{autor}</p>
                            </div>
                        </div>

                        <div className="flex justify-center w-full">
                            {imagem && <img src={imagem} alt="Postagem" className="my-3 w-200 rounded-2xl" />}
                        </div>

                        <div className="flex flex-col items-start gap-2 text-[#859F74] text-md font-semibold">
                            <p>{titulo}</p>
                            <p>{mensagem}</p>
                        </div>

                    </div>
                </div>
                :
                //modo escuro
                <div>
                    <div className="flex flex-col items-start justify-start bg-[#111411] rounded-4xl p-5 mt-5 mx-10  shadow-2xl">
                        <div className="flex flex-row gap-10">
                            <div className="flex flex-row items-center gap-5 justify-start">
                                <img src={foto ? foto : FotoExemplo} alt="Usuario1" className="w-10 rounded-full" />
                                <p className="text-2xl text-[#ffffff]">{autor}</p>
                            </div>
                        </div>

                        <div className="flex justify-center w-full">
                            {imagem && <img src={imagem} alt="Postagem" className="my-3 w-200 rounded-2xl" />}
                        </div>

                        <div className="flex flex-col items-start gap-2 text-[#ffffff] text-md font-semibold">
                            <p>{titulo}</p>
                            <p>{mensagem}</p>
                        </div>

                    </div>
                </div>}

        </div>
    )
}

export default CardPostagens
