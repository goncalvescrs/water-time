import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";


const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route exact path='/cadastro' element={<Cadastro />} */}
                {/* <Route exact path='/login' element={<Login />} */}
            </Routes>
        </>
    )
}

export default AppRoutes