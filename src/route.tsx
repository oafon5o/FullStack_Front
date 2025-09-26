import { Route, Routes } from "react-router-dom";
import LayoutAdmin from "./componentes/LayoutAdmin/index";
import Home from "./pages/home/home";
import Login from "./pages/login";
import Usuario from "./pages/usuario";
import Carrinho from "./pages/carrinho";
import LayoutLogin from "./componentes/LayoutLogin";
import Cadastrese from "./pages/cadastrese";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LayoutLogin />}>
                <Route index element={<Login />} />
                <Route path="cadastrar" element={<Cadastrese />} />
            </Route>
            <Route element={<LayoutAdmin />}>
                <Route path="/usuario" element={<Usuario />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;