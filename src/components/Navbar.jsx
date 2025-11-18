import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHouse, faUserDoctor, faUserGroup, faComment } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import profileSemFoto from '../assets/profileSemFoto.png';

function Navbar() {
    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado"));
    const darkModeUsuario = JSON.parse(localStorage.getItem("UsuarioLogado")) || { darkMode: false };

    const nomeLogado = usuarioLogado?.nome || "ENTRAR";
    const fotoLogado = usuarioLogado?.foto || profileSemFoto;

    const [menuOpen, setMenuOpen] = useState(false);

    const bgColor = darkModeUsuario.darkMode ? "bg-[#202b20]" : "bg-[#859F74]";
    const bgMobile = darkModeUsuario.darkMode ? "bg-[#1a221a]" : "bg-[#6f8b61]";

    const linkClass = (isActive) =>
        `flex items-center justify-center text-4xl h-20 ${isActive ? "border-b-4 border-white" : ""}`;

    return (
        <div>

            <div className={`${bgColor} h-20 grid-cols-8 text-xl text-white hidden md:grid`}>

                <div className="flex items-center col-start-1">
                    <h1 className="font-extralight text-3xl ml-10">SYNERGY</h1>
                </div>

                <div className="flex items-center col-start-4">
                    <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>
                        <FontAwesomeIcon icon={faHouse} />
                    </NavLink>
                </div>

                <div className="flex items-center col-start-5">
                    <NavLink to="/funcionarios" className={({ isActive }) => linkClass(isActive)}>
                        <FontAwesomeIcon icon={faUserDoctor} />
                    </NavLink>
                </div>

                {usuarioLogado && (
                    <div className="flex items-center col-start-6">
                        <NavLink to="/seguidores" className={({ isActive }) => linkClass(isActive)}>
                            <FontAwesomeIcon icon={faUserGroup} />
                        </NavLink>
                    </div>
                )}

                {usuarioLogado && (
                    <div className="flex items-center col-start-7">
                        <NavLink to="/mensagens" className={({ isActive }) => linkClass(isActive)}>
                            <FontAwesomeIcon icon={faComment} />
                        </NavLink>
                    </div>
                )}

                <div className="flex items-center justify-end col-start-8 mr-20">
                    <NavLink to={usuarioLogado ? "/meuPerfil" : "/login"}
                        className={({ isActive }) =>
                            `flex items-center justify-center h-20 ${isActive ? "border-b-4 border-white" : ""}`}>
                        <span>{nomeLogado}</span>
                        <img src={fotoLogado} className="w-10 h-10 rounded-full ml-5" />
                    </NavLink>
                </div>
            </div>

            <div className={`${bgColor} md:hidden h-20 flex items-center justify-between px-6 text-white`}>
                <h1 className="font-extralight text-3xl">SYNERGY</h1>

                <button onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-3xl" />
                </button>
            </div>

            {menuOpen && (
                <div className={`${bgMobile} md:hidden text-white flex flex-col px-6 py-6 gap-6 text-2xl`}>

                    <NavLink to="/" className="flex gap-3 items-center" onClick={() => setMenuOpen(false)}>
                        <FontAwesomeIcon icon={faHouse} />
                        Início
                    </NavLink>

                    <NavLink to="/funcionarios" className="flex gap-3 items-center" onClick={() => setMenuOpen(false)}>
                        <FontAwesomeIcon icon={faUserDoctor} />
                        Funcionários
                    </NavLink>

                    {usuarioLogado && (
                        <NavLink to="/seguidores" className="flex gap-3 items-center" onClick={() => setMenuOpen(false)}>
                            <FontAwesomeIcon icon={faUserGroup} />
                            Seguidores
                        </NavLink>
                    )}

                    {usuarioLogado && (
                        <NavLink to="/mensagens" className="flex gap-3 items-center" onClick={() => setMenuOpen(false)}>
                            <FontAwesomeIcon icon={faComment} />
                            Mensagens
                        </NavLink>
                    )}

                    <NavLink
                        to={usuarioLogado ? "/meuPerfil" : "/login"}
                        className="flex items-center gap-4 mt-4"
                        onClick={() => setMenuOpen(false)}
                    >
                        <img src={fotoLogado} className="w-10 h-10 rounded-full" />
                        {nomeLogado}
                    </NavLink>

                </div>
            )}
        </div>
    );
}

export default Navbar;