import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater, faFire, faClock, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react"

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";
import { color } from "chart.js/helpers";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

function Dashboard() {

    const usuarioLogado = JSON.parse(localStorage.getItem("UsuarioLogado")) || {
        darkMode: false
    };

    const [dados, setDados] = useState({})
    const [historicoBPM, setHistoricoBPM] = useState([])
    const [horaBPM, setHoraBPM] = useState([])
    const [startTime, setStartTime] = useState(null)
    const [totalTime, setTotalTime] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://127.0.0.1:1880/monitoramentoSynergy')
                .then(res => res.json())
                .then(data => {
                    setDados(data)
                })
        }, 1000)

        return () => clearInterval(interval)
    }, [])


    useEffect(() => {
        if (!dados.presenca) return;

        if (dados.presenca === "Presente" && startTime === null) {
            setStartTime(Date.now());
        }

        if (dados.presenca === "Ausente" && startTime !== null) {
            setTotalTime(prev => prev + (Date.now() - startTime));
            setStartTime(null);
        }
    }, [dados])

    useEffect(() => {
        if (dados.bpMin !== undefined) {

            const horaFormatada = new Date().toLocaleTimeString('pt-BR', {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });

            setHistoricoBPM(prev => [...prev, dados.bpMin].slice(-10));
            setHoraBPM(prev => [...prev, horaFormatada].slice(-10));
        }
    }, [dados]);

    const minutosPresentes = Math.floor(totalTime / 1000 / 60);


    //modo claro
    const graficoClaro = {
        labels: horaBPM,
        datasets: [
            {
                label: "BPM",
                data: historicoBPM,
                borderColor: "rgb(133, 159, 116)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4,
            },
        ],
    }

    //modo escuro
    const graficoEscuro = {
        labels: horaBPM,
        datasets: [
            {
                label: "BPM",
                data: historicoBPM,
                borderColor: "rgb(255,255,255)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4,
            },
        ],
    }



    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
    };

    const optionsDark = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        }
    };

    return (
        <div className="flex justify-center items-center">
            {usuarioLogado.darkMode === false ?
                // modo claro
                <div className="w-350 bg-[#EDEBEB] rounded-4xl shadow-2xl flex flex-col text-[#859F74]">
                    <div className="flex flex-row items-center justify-between px-10">
                        <h1 className="font-extralight text-4xl text-[#859F74] p-20 pb-0 flex items-center ml-10">
                            DASHBOARD
                        </h1>
                        <h1 className="text-2xl text-[#859F74] p-20 pb-0 flex items-center ml-10">
                            {String(dados?.presenca || "presente").toUpperCase()}

                        </h1>
                    </div>

                    <div className="grid grid-cols-3 p-10 gap-7">

                        <div className="flex flex-col bg-white rounded-3xl shadow-2xl p-10 gap-5">
                            <FontAwesomeIcon icon={faWater} className="text-white text-2xl p-3 shadow-2xl rounded-xl bg-[#859F74]" />
                            <p>Umidade local</p>
                            <h1 className="text-6xl font-bold">{dados.umidade}%</h1>
                        </div>

                        <div className="flex flex-col bg-white rounded-3xl shadow-2xl p-10 gap-5">
                            <FontAwesomeIcon icon={faFire} className="text-white text-2xl p-3 shadow-2xl rounded-xl bg-[#859F74]" />
                            <p>Temperatura local</p>
                            <h1 className="text-6xl font-bold">{dados.temperatura}°C</h1>
                        </div>

                        <div className="flex flex-col bg-white rounded-3xl shadow-2xl p-10 gap-5">
                            <FontAwesomeIcon icon={faClock} className="text-white text-2xl p-3 shadow-2xl rounded-xl bg-[#859F74]" />
                            <p>Tempo de tela</p>
                            <h1 className="text-6xl font-bold">{minutosPresentes}min</h1>
                        </div>

                        <div className="col-span-3 flex flex-col bg-white rounded-3xl shadow-2xl p-10 gap-5">
                            <FontAwesomeIcon icon={faHeart} className="text-white text-2xl p-3 shadow-2xl rounded-xl bg-[#859F74]" />
                            <p>Batimentos por minuto</p>
                            <h1 className="text-6xl font-bold">{dados.bpMin}</h1>
                            <Line data={graficoClaro} options={options}></Line>
                        </div>

                    </div>
                </div>
                :
                //modo escuro
                <div className="w-350 bg-[#1A1D1A] rounded-4xl shadow-2xl flex flex-col text-[#ffffff]">
                    <div className="flex flex-row items-center justify-between px-10">
                        <h1 className="font-extralight text-4xl text-[#ffffff] p-20 pb-0 flex items-center ml-10">
                            DASHBOARD
                        </h1>
                        <h1 className="text-2xl text-[#ffffff] p-20 pb-0 flex items-center ml-10">
                            {String(dados?.presenca || "presente").toUpperCase()}

                        </h1>
                    </div>

                    <div className="grid grid-cols-3 p-10 gap-7">

                        <div className="flex flex-col bg-[#111411] rounded-3xl shadow-2xl p-10 gap-5">
                            <FontAwesomeIcon icon={faWater} className="text-[#859F74] text-2xl p-3 shadow-2xl rounded-xl bg-[#ffffff]" />
                            <p>Umidade local</p>
                            <h1 className="text-6xl font-bold">{dados.umidade}%</h1>
                        </div>

                        <div className="flex flex-col bg-[#111411] rounded-3xl shadow-2xl p-10 gap-5">
                            <FontAwesomeIcon icon={faFire} className="text-[#859F74] text-2xl p-3 shadow-2xl rounded-xl bg-[#ffffff]" />
                            <p>Temperatura local</p>
                            <h1 className="text-6xl font-bold">{dados.temperatura}°C</h1>
                        </div>

                        <div className="flex flex-col bg-[#111411] rounded-3xl shadow-2xl p-10 gap-5">
                            <FontAwesomeIcon icon={faClock} className="text-[#859F74] text-2xl p-3 shadow-2xl rounded-xl bg-[#ffffff]" />
                            <p>Tempo de tela</p>
                            <h1 className="text-6xl font-bold">{minutosPresentes}min</h1>
                        </div>

                        <div className="col-span-3 flex flex-col bg-[#111411] rounded-3xl shadow-2xl p-10 gap-5">
                            <FontAwesomeIcon icon={faHeart} className="text-[#859F74] text-2xl p-3 shadow-2xl rounded-xl bg-[#ffffff]" />
                            <p>Batimentos por minuto</p>
                            <h1 className="text-6xl font-bold">{dados.bpMin}</h1>
                            <Line data={graficoEscuro} options={options}></Line>
                        </div>

                    </div>
                </div>}


        </div>
    )
}

export default Dashboard
