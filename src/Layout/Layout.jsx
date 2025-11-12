import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MiniPerfil from "../components/MiniPerfil"
import MelhoresProfissionais from "../components/MelhoresProfissionais"
import FiltroAvancado from "../components/FiltroAvancado"
import FiltroPostagens from "../components/FiltroPostagens"

function Layout() {

    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className="flex flex-1 px-20 py-10 gap-10 bg-[#DFDFDF]">
                <div className="w-1/4">
                    <MiniPerfil />
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