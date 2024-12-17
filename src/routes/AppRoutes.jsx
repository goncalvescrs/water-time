import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import Register from "../pages/register/Register";


const AppRoutes = () => {
    const { userId } = useContext(UserContext);
    
    return (
        <>
            <Routes>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/cadastro' element={<Register />} />
                {userId ? <Route exact path='/' element={<Home />} /> : null}
            </Routes>
        </>
    )
}

export default AppRoutes