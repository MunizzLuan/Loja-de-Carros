import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Cadastro from './pages/cadastro'

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    )
}

export default MainRoutes;