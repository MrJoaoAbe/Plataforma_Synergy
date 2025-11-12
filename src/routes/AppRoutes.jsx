import { BrowserRouter, createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import LayoutLimpo from "../Layout/LayoutSimplificado"
import Home from "../pages/Home"
import Cadastro from "../pages/Cadastro"
import Funcionarios from "../pages/Funcionarios"
import Login from "../pages/Login"
import Mensagens from "../pages/Mensagens"
import Seguidores from "../pages/Seguidores"
import MeuPerfil from "../pages/MeuPerfil"
import VisualizarPerfil from "../pages/VisualizarPerfil"
import Dashboard from "../pages/Dashboard"
import CriarPost from "../pages/CriarPost"
import ErrorPage from "../pages/ErrorPage"
import MensagemDireta from "../pages/MensagemDireta"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "funcionarios", element: <Funcionarios /> },
            { path: "seguidores", element: <Seguidores /> },
            { path: "mensagens", element: <Mensagens /> },
            { path: "mensagemDireta", element: <MensagemDireta /> },
            { path: "criarPost", element: <CriarPost /> },
        ],

    },
    {
        path: '/',
        element: <LayoutLimpo />,
        children: [
            { path: "login", element: <Login /> },
            { path: "cadastro", element: <Cadastro /> },
            { path: "meuPerfil", element: <MeuPerfil /> },
            { path: "visualizarPerfil", element: <VisualizarPerfil /> },
            { path: "dashboard", element: <Dashboard /> }
        ]
    }

])