import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cadastro" element={<Register />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
