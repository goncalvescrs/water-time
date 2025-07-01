import { useContext, useState } from "react";
import { api } from "../../service/Api";
import "./login.css";
import { Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { MdWaterDrop } from "react-icons/md";

const Login = ({}) => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const { handleLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    toast.info(
      "Funcionalidade em construção! Por enquanto está liberado somente o uso sem login. Vou te redirecionar pra pagina principal!"
    );

    setTimeout(() => {
      navigate("/");
    }, 6000);
    // ========================================================
    // try {
    //     const response = await api.get("/users");

    //     const user = response.data.filter((data) =>
    //         data.email === login.email && data.password === login.password
    //     );

    //     if (user.length > 0) {
    //         const userData = user[0];
    //         handleLogin(userData.id);
    //     } else if(login.email == "") {
    //         toast.error("Preencha os dados!")
    //     } else {
    //         toast.error("Usuário ou senha inválidas!")
    //         handleZerar();
    //     }

    // } catch (error) {
    //     toast.error("Erro ao realizar login");
    //     console.error(error);
    // } finally {
    //     setLoading(false); // Termina o carregamento
    // }
    // ========================================================
  };

  const handleZerar = () => {
    setLogin({ email: "", password: "" });
  };

  return (
    <>
      <ToastContainer hideProgressBar={true} />
      <div className="page">
        <div className="container">
          <div className="header-box">
            <div className="brand-box">
              <MdWaterDrop color="#FFFFFF" size={80} />
              <span className="brand-name">WaterTime</span>
            </div>
          </div>
          <div className="header-box">
            <h5 className="login">Login</h5>
          </div>

          <div className="form-signin w-100 m-auto">
            <form onSubmit={handleSubmit}>
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={login.email}
                  onChange={(e) =>
                    setLogin({ ...login, email: e.target.value })
                  }
                />
                <label htmlFor="floatingInput">E-mail</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={login.senha}
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
                <label htmlFor="floatingPassword">Senha</label>
              </div>
              <button
                className="button btn btn-primary w-100 btn-lg"
                type="submit"
              >
                {!loading ? "Entrar" : <Spinner animation="border" size="sm" />}
              </button>
            </form>
          </div>

          <div className="bottom-box">
            <span>
              Não tem conta?{" "}
              <a
                className="register"
                href="#"
                onClick={() => navigate("/cadastro")}
              >
                Criar conta
              </a>
            </span>
            <p className="mt-4">&copy; WaterTime - 2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
