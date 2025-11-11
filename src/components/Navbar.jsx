import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUserDoctor, faUserGroup, faComment } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="bg-[#859F74] h-20 grid grid-cols-8 text-xl gap-20 text-white">

            <div className="flex items-center col-start-1">
                <h1 className="font-extralight text-3xl ml-10">SYNERGY</h1>
            </div>

            <div className="flex items-center col-start-4">
                <NavLink
                    to="/"
                    className={({ isActive }) => `flex items-center justify-center text-4xl h-20 ${isActive ? "border-b-4 border-white" : ""} text-white`}>
                    <FontAwesomeIcon icon={faHouse} />
                </NavLink>
            </div>


            <div className="flex items-center col-start-5">
                <NavLink
                    to="/funcionarios"
                    className={({ isActive }) => `flex items-center justify-center text-4xl h-20 ${isActive ? "border-b-4 border-white" : ""} text-white`}>
                    <FontAwesomeIcon icon={faUserDoctor} className="text-white text-4xl" />
                </NavLink>

            </div>

            <div className="flex items-center col-start-6">
                <NavLink
                    to="/seguidores"
                    className={({ isActive }) => `flex items-center justify-center text-4xl h-20 ${isActive ? "border-b-4 border-white" : ""} text-white`}>
                    <FontAwesomeIcon icon={faUserGroup} className="text-white text-4xl" />
                </NavLink>

            </div>

            <div className="flex items-center col-start-7">
                <NavLink
                    to="/seguidores"
                    className={({ isActive }) => `flex items-center justify-center text-4xl h-20 ${isActive ? "border-b-4 border-white" : ""} text-white`}>
                    < FontAwesomeIcon icon={faComment} className="text-white text-4xl" />
                </NavLink>

            </div>

            <div className="flex items-center justify-end col-start-8 mr-20">
                <NavLink
                    to="/login"
                    className={({ isActive }) => `flex items-center justify-center h-20 ${isActive ? "border-b-4 border-white" : ""} text-white`}>
                    <span>ENTRAR</span>
                    <img src="" alt="" className="w-10 h-10 rounded-full" />
                </NavLink>


            </div>
        </div>
    )
}


export default Navbar



