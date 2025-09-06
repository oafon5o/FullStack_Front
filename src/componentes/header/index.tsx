function Header() {
    return (
        <header className="bg-dark text-white py-3">
            <nav className="container d-flex justify-content-center gap-4">
                <a href="/" className="text-white text-decoration-none">Home</a>
                <a href="/usuarios" className="text-white text-decoration-none">Usuarios</a>
            </nav>
        </header>

    );
}

export default Header;