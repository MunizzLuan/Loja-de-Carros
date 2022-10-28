import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    )
}

export default MainRoutes;