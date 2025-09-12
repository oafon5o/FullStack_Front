import { Outlet } from "react-router-dom";

function LayoutLogin(){
    const backgroundImage = `url('https://img.freepik.com/fotos-premium/melhor-foto-aleatoria_865967-222503.jpg')`; // substitua por sua imagem completa em base64

  return (
    <div className="d-flex justify-content-center align-items-center vh-100"
    style={{backgroundImage,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"}}>
        {/* Lado da imagem */}

        {/* Lado do conteúdo */}
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 col-lg-4 bg-white p-4 rounded shadow">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}


export default LayoutLogin;