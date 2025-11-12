import FotoExemplo from "../assets/Example.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { Link, Links } from "react-router-dom"
import Ana from "../assets/ana.png"
import Celbit from "../assets/celbit.png"
import Sergio from "../assets/Sergio.png"

function MelhoresProfissionais() {
    return (
        <div className="bg-[#EDEBEB] h-70 rounded-4xl shadow-2xl flex flex-col items-center w-100 border-4 p-5 border-[#859F74] text-[#859F74]">
            <p className="font-bold pb-5">Usuários melhores avaliados na sua área</p>

            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3">
                    <img src={Sergio} alt="" className="w-12 rounded-full" />
                    <p className="text-2xl">Sergio Malandro</p>
                    <FontAwesomeIcon icon={faStar} style={{ color: "#859F74" }} className="text-xl" />
                    <p className="text-2xl">200</p>
                </div>

                <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3">
                    <img src={Celbit} alt="" className="w-12 rounded-full" />
                    <p className="text-2xl">Celbit</p>
                    <FontAwesomeIcon icon={faStar} style={{ color: "#859F74" }} className="text-xl" />
                    <p className="text-2xl">200</p>
                </div>

                <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-3">
                    <img src={Ana} alt="" className="w-12 rounded-full" />
                    <p className="text-2xl">Ana Dev</p>
                    <FontAwesomeIcon icon={faStar} style={{ color: "#859F74" }} className="text-xl" />
                    <p className="text-2xl">200</p>
                </div>

            </div>
        </div >
    )
}

export default MelhoresProfissionais