import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRoutes'
import { PostagensProvider } from '../PostagensContext'
import { FuncionariosProvider } from '../FuncionariosContext'


createRoot(document.getElementById('root')).render(
  <PostagensProvider>
    <FuncionariosProvider>
      <RouterProvider router={router} />
    </FuncionariosProvider>
  </PostagensProvider>,
)
