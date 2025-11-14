import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserDoctor, faUserGroup, faComment } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import profileSemFoto from '../assets/profileSemFoto.png'

function Navbar() {
    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado"));
    const darkModeUsuario = JSON.parse(localStorage.getItem("UsuarioLogado")) || {
        darkMode: false
    };

    // Definindo valores padrão caso o localStorage seja null
    const nomeLogado = usuarioLogado?.nome || "ENTRAR";
    const fotoLogado = usuarioLogado?.foto || profileSemFoto;

    return (
        <div>
            {/* Modo Claro */}
            {darkModeUsuario.darkMode === false ?
                <div className="bg-[#859F74] h-20 grid grid-cols-8 text-xl gap-20 text-white">
                    <div className="flex items-center col-start-1">
                        <h1 className="font-extralight text-3xl ml-10">SYNERGY</h1>
                    </div>

                    <div className="flex items-center col-start-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `flex items-center justify-center text-4xl h-20 ${isActive ? "border-b-4 border-white" : ""}`}>
                            <FontAwesomeIcon icon={faHouse} />
                        </NavLink>
                    </div>

                    <div className="flex items-center col-start-5">
                        <NavLink
                            to="/funcionarios"
                            className={({ isActive }) => `flex items-center justify-center text-4xl h-20 ${isActive ? "border-b-4 border-white" : ""}`}>
                            <FontAwesomeIcon icon={faUserDoctor} />
                        </NavLink>
                    </div>

                    {usuarioLogado &&
                        <div className="flex items-center col-start-6">
                            <NavLink
                                to="/seguidores"
                                className={({ isActive }) => `flex items-center justify-center text-4xl h-20 ${isActive ? "border-b-4 border-white" : ""}`}>
                                <FontAwesomeIcon icon={faUserGroup} />
                            </NavLink>
                        </div>}


                    {usuarioLogado &&
                        <div className="flex items-center col-start-7">
                            <NavLink
                                to="/mensagens"
                                className={({ isActive }) => `flex items-center justify-center text-4xl h-20 ${isActive ? "border-b-4 border-white" : ""}`}>
                                <FontAwesomeIcon icon={faComment} />
                            </NavLink>
                        </div>}


                    <div className="flex items-center justify-end col-start-8 mr-20">
                        <NavLink
                            to={usuarioLogado ? "/meuPerfil" : "/login"}
                            className={({ isActive }) => `flex items-center justify-center h-20 ${isActive ? "border-b-4 border-white" : ""}`}>
                            <span>{nomeLogado}</span>
                            <img src={fotoLogado} className="w-10 h-10 rounded-full ml-5" />
                        </NavLink>
                    </div>
                </div>
                :


                <div className="bg-[#202b20] h-20 grid grid-cols-8 text-xl gap-20 text-white">
                    <div className="flex items-center col-start-1">
                        <h1 className="font-extralight text-3xl ml-10">SYNERGY</h1>
                    </div>

                    <div className="flex items-center col-start-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `flex items-center justify-center text-4xl h-20 ${isActive ? "border-b-4 border-white" : ""}`}>
                            <FontAwesomeIcon icon={faHouse} />
                        </NavLink>
                    </div>

                    <div className="flex items-center col-start-5">
                        <NavLink
                            to="/funcionarios"
                            className={({ isActive }) => `flex items-center justify-center text-4xl h-20 ${isActive ? "border-b-4 border-white" : ""}`}>
                            <FontAwesomeIcon icon={faUserDoctor} />
                        </NavLink>
                    </div>

                    {usuarioLogado &&
                        <div className="flex items-center col-start-6">
                            <NavLink
                                to="/seguidores"
                                className={({ isActive }) => `flex items-center justify-center text-4xl h-20 ${isActive ? "border-b-4 border-white" : ""}`}>
                                <FontAwesomeIcon icon={faUserGroup} />
                            </NavLink>
                        </div>}

                    {usuarioLogado &&
                        <div className="flex items-center col-start-7">
                            <NavLink
                                to="/mensagens"
                                className={({ isActive }) => `flex items-center justify-center text-4xl h-20 ${isActive ? "border-b-4 border-white" : ""}`}>
                                <FontAwesomeIcon icon={faComment} />
                            </NavLink>
                        </div>}


                    <div className="flex items-center justify-end col-start-8 mr-20">
                        <NavLink
                            to={usuarioLogado ? "/meuPerfil" : "/login"}
                            className={({ isActive }) => `flex items-center justify-center h-20 ${isActive ? "border-b-4 border-white" : ""}`}>
                            <span>{nomeLogado}</span>
                            <img src={fotoLogado} className="w-10 h-10 rounded-full ml-5" />
                        </NavLink>
                    </div>
                </div>
            }

        </div>
    );
}

export default Navbar;
