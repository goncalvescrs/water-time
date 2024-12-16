import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import Register from "../pages/register/Register";


const AppRoutes = () => {
    const { userId } = useContext(UserContext);
    // console.log(`Usúario logado: ${userId}`)

    

    return (
        <>
            <Routes>
            {userId ? (
                    <>
                        <Route exact path='/' element={<Home />} />
                    </>
                ) : (
                    <>
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/cadastro' element={<Register />} />
                    </>
                )
            }
            </Routes>
        </>
    )
}

export default AppRoutes