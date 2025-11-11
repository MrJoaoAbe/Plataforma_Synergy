import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Layout() {
    return (
        <div>
            <h1>layout cheio</h1>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout