import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MiniPerfil from "../components/MiniPerfil"
import MelhoresProfissionais from "../components/MelhoresProfissionais"

function Layout() {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-3 p-20">
                <MiniPerfil />
                <Outlet />
                <MelhoresProfissionais />
            </div>

            <Footer />
        </div>
    )
}

export default Layout