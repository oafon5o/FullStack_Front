import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
            <div className="text-center mb-4">
                <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTIiIGZpbGw9IiNmZmYiLz48dGV4dCB4PSIyMiIgeT0iMzQiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiMwMDAiPkxPR088L3RleHQ+PC9zdmc+"
                    alt="logo"
                    className="img-fluid"
                    style={{ maxHeight: '80px' }}
                />
            </div>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a href="/" className="nav-link text-white">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#submenucadastro"
                        className="nav-link text-white"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="submenucadastro"
                    >
                        Cadastro
                    </a>
                    <ul className="collapse list-unstyled ps-3" id="submenucadastro">
                        <li className="nav-item">
                            <Link to = "/usuario" className="nav-link text-white">Usuário</Link>
                        </li>
                        <li className="nav-item">
                            <Link to = "/carrinho" className="nav-link text-white">Carrinho</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
