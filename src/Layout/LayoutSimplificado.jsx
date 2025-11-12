import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Layout() {
    return (
        <div>
            <Navbar />
            <div className="px-20 py-10 gap-10 bg-[#DFDFDF]">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout