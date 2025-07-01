import { useContext, useState } from "react";
import { api } from "../../service/Api";
// import './register.css'
import { Spinner } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { MdWaterDrop } from "react-icons/md";

const Register = ({}) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [sleepHours, setSleepHours] = useState("");
  const [bottle, setBottle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !password ||
      !age ||
      !weight ||
      !sleepHours ||
      !bottle
    ) {
      toast.error("Todos os campos são obrigatórios.");
      return;
    }

    setIsLoading(true);

    toast.info(
      "Funcionalidade em construção! Por enquanto está liberado somente o uso sem cadastro. Vou te redirecionar pra pagina principal!"
    );
    setTimeout(() => {
      navigate("/");
    }, 6000);

    // ==============================================
    // try {
    //   console.log("Verificando se o e-mail já existe...");
    //   const response = await api.get('/users');
    //   const users = response.data;
    //   const emailExists = users.some(user => user.email === email);

    //   if (emailExists) {
    //     toast.error('Email já cadastrado');
    //     setEmail("");
    //     setPassword("");
    //     setIsLoading(false);
    //     return;
    //   }

    //   console.log("Verificando a capacidade da garrafa...");
    //   if (bottle <= 2) {
    //     toast.warn("Valor da garrafinha tem que ser em ML");
    //     setBottle("");
    //     setIsLoading(false);
    //     return;
    //   } else if (bottle > 2 && bottle < 250) {
    //     toast.warn("A Garrafinha deve ter no mínimo 250 ML");
    //     setBottle("");
    //     setIsLoading(false);
    //     return;
    //   }

    //   console.log("Criando usuário...");
    //   const createUserResponse = await api.post("/users", {
    //     name,
    //     email,
    //     password,
    //     age,
    //     weight,
    //     sleepHours,
    //     bottle
    //   });

    //   if (createUserResponse.status === 201) {
    //     toast.success('Usuário cadastrado com sucesso!');
    //     console.log("Usuário criado com sucesso:", createUserResponse.data);

    //     console.log("Redirecionando para a página de login...");
    //     setTimeout(() => {
    //       navigate('/login');
    //     }, 1000);
    //   } else {
    //     toast.error("Falha ao criar usuário");
    //     console.log("Resposta inesperada da API:", createUserResponse);
    //   }
    // } catch (error) {
    //   toast.error("Erro ao cadastrar usuário");
    //   console.error("Erro ao cadastrar usuário:", error);
    // } finally {
    //   setIsLoading(false);
    // }
    // =====================================================
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
            <h5 className="login">Criar conta</h5>
          </div>

          <div
            className="form-signin w-100 m-auto"
            style={{ textAlign: "left" }}
          >
            <form className="needs-validation" onSubmit={handleSubmit}>
              <div className="row g-3">
                {/* <label htmlFor="name" className="form-label">Nome</label> */}
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Digite seu nome"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="col-sm-5">
                  {/* <label htmlFor="age" className="form-label">Idade</label> */}
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    placeholder="Idade"
                    required
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                <div className="col-sm-7">
                  <input
                    type="number"
                    className="form-control"
                    id="sleepHours"
                    placeholder="Horas de sono"
                    required
                    value={sleepHours}
                    onChange={(e) => setSleepHours(e.target.value)}
                  />
                </div>

                <div className="col-sm-5">
                  {/* <label htmlFor="weight" className="form-label">Peso</label> */}
                  <input
                    type="number"
                    className="form-control"
                    id="weight"
                    placeholder="Peso"
                    required
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>

                <div className="col-sm-7">
                  {/* <label htmlFor="bottle" className="form-label">Garrafa (ml)</label> */}
                  <input
                    type="number"
                    className="form-control"
                    id="bottle"
                    placeholder="Garrafa (ml)"
                    required
                    value={bottle}
                    onChange={(e) => setBottle(e.target.value)}
                  />
                </div>

                <div className="col-12">
                  {/* <label htmlFor="email" className="form-label">Email</label> */}
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Digite seu Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-12">
                  {/* <label htmlFor="password" className="form-label">Senha</label> */}
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Digite sua senha"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <button
                className="button btn btn-primary w-100 btn-lg"
                type="submit"
              >
                {!isLoading ? (
                  "Cadastrar"
                ) : (
                  <Spinner animation="border" size="sm" />
                )}
              </button>
            </form>
          </div>

          <div className="bottom-box">
            <span>
              Ja tem uma conta?{" "}
              <a
                className="register"
                href="#"
                onClick={() => navigate("/login")}
              >
                Entre
              </a>
            </span>
            <p className="mt-4">&copy; WaterTime - 2024</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
