import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-dark text-white py-3">
            <nav className="container d-flex justify-content-center gap-4">
                <Link to="/" className="text-white text-decoration-none">Home</Link>
                <Link to="/usuarios" className="text-white text-decoration-none">Usuarios</Link>
            </nav>
        </header>

    );
}

export default Header;