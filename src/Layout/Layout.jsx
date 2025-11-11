import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MiniPerfil from "../components/MiniPerfil"
import MelhoresProfissionais from "../components/MelhoresProfissionais"

function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <MiniPerfil />
            <MelhoresProfissionais />
            <Footer />
        </div>
    )
}

export default Layout