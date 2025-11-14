import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { useEffect, useState } from "react"

function Layout() {

    const [usuarioLogado, setUsuarioLogado] = useState(
        JSON.parse(localStorage.getItem("UsuarioLogado")) || {
            darkMode: false
        }
    );

    useEffect(() => {
        function atualizar() {
            setUsuarioLogado(JSON.parse(localStorage.getItem("UsuarioLogado")));
        }

        window.addEventListener("darkmode-change", atualizar);

        return () => window.removeEventListener("darkmode-change", atualizar);
    }, []);

    return (
        <div>
            <Navbar />

            {usuarioLogado?.darkMode === false ? (
                <div className="px-20 py-10 gap-10 bg-[#DFDFDF]">
                    <Outlet />
                </div>
            ) : (
                <div className="px-20 py-10 gap-10 bg-[#111411]">
                    <Outlet />
                </div>
            )}


            <Footer />
        </div>
    )
}

export default Layout