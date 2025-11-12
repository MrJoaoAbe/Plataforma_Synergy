import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MiniPerfil from "../components/MiniPerfil"
import MelhoresProfissionais from "../components/MelhoresProfissionais"
import FiltroAvancado from "../components/FiltroAvancado"
import FiltroPostagens from "../components/FiltroPostagens"

function Layout() {

    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado"))

    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="flex flex-1 px-20 py-10 gap-10 bg-[#DFDFDF]">
                <div className="w-1/4">
                    {usuarioLogado && (
                        <MiniPerfil
                            foto={usuarioLogado.foto}
                            nome={usuarioLogado.nome}
                            avaliacoes={usuarioLogado.avaliacoes}
                            seguidores={Array.isArray(usuarioLogado.seguidores) ? usuarioLogado.seguidores.length : 0}
                            posts={usuarioLogado.postagens?.length || 0}
                            area={usuarioLogado.area}
                            localizacao={usuarioLogado.localizacao}
                        />
                    )}

                </div>

                <div className="flex-1">
                    <Outlet />
                </div>

                <div className="w-1/4">
                    <MelhoresProfissionais />
                    {location.pathname === '/funcionarios' && <FiltroAvancado />}
                    {location.pathname === '/' && <FiltroPostagens />}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Layout