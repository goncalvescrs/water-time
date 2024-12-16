import { useContext, useState } from "react";
import { api } from "../../service/Api";
import './styles.css'
import { Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";


const Login = ({}) => {
    const [login, setLogin] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false); // Estado de carregamento
    const { handleLogin } = useContext(UserContext);
    const navigate = useNavigate();

    // console.log('Login data:', login);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Inicia o carregamento

        try {
            const response = await api.get("/users");
            // console.log(response.data)
            
            const user = response.data.filter((data) =>
                data.email === login.email && data.password === login.password
            );

            if (user.length > 0) {
                // Por um Loading..
                const userData = user[0];
                handleLogin(userData.id);
            } else if(login.email == "") {
                toast.error("Preencha os dados!")
            } else {
                toast.error("Usuário ou senha inválidas!")
                handleZerar();
            }


        } catch (error) {
            toast.error("Erro ao realizar login");
            console.error(error);
        } finally {
            setLoading(false); // Termina o carregamento
        }
    };

    const handleZerar = () => {
        setLogin({ email: "", password: "" });
      };

    return (
        <>
        {/* <button onClick={()=>handleSubmit()}>teste</button> */}
            <ToastContainer />
            <div className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit}>
                    <img className="mb-4" src="src/assets/react.svg" alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Faça seu login</h1>

                    <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        value={login.email}
                        onChange={(e) => setLogin({ ...login, email: e.target.value })}
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
                        onChange={(e) => setLogin({ ...login, password: e.target.value })}
                    />
                    <label htmlFor="floatingPassword">Senha</label>
                    </div>

                   
                    <button className="btn btn-primary w-100 py-2" type="submit">
                        {loading ? <Spinner animation="border" size="sm" /> : 'Sign in'}
                    </button>

                    <p className="mt-5 mb-3 text-body-secondary">&copy; WaterTime - 2024</p>
                </form>
            </div>
        </>
    )
};

export default Login;