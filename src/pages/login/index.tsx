import { Link } from "react-router-dom";

function Login() {
    return (
        <div >
            <h2 className="mb-4">Login</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" className="form-control" id="email" placeholder="Digite seu e-mail" />
                </div>
                <div className="mb-3">
                    <label htmlFor="senha" className="form-label">Senha</label>
                    <input type="password" className="form-control" id="senha" placeholder="Digite sua senha" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Entrar</button>
                <div className="text-center mt-3">
                    <span>Não tem uma conta? </span>
                    <Link to="/cadastrar">Cadastre-se</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;