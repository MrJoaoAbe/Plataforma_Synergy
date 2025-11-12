import { Link } from "react-router-dom"

function Footer() {
    return (
        <div>
            <div className="bg-[#21212A] p-10 text-gray-500 flex justify-center">
                <div className="grid grid-cols-2 gap-x-30">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold mb-2">Contatos</h3>
                        <p>11987654321</p>
                        <p>São Paulo SP</p>
                        <p>HelpDesk@synergy.com</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold mb-2">Navegação Simples</h3>
                        <Link to="/" className="hover:text-[#ffffff] transition duration-200">HOME</Link>
                        <Link to="/funcionarios" className="hover:text-[#ffffff] transition duration-2">FUNCIONÁRIOS</Link>
                        <Link to="/seguidores" className="hover:text-[#ffffff] transition duration-2">SEGUIDORES</Link>
                        <Link to="/mensagens" className="hover:text-[#ffffff] transition duration-2">MENSAGENS</Link>
                    </div>
                </div>
            </div>

            <div className="bg-[#21212A] p-10 text-gray-500 flex justify-center">
                <h1 className="font-extralight text-2xl">SYNERGY</h1>
                <h1 className="font-extralight text-2xl pl-5">©</h1>
                <h1 className="font-extralight text-2xl pl-5">2025</h1>
            </div>
        </div>
    )
}

export default Footer