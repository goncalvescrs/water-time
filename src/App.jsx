import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './context/UserContext';
import './index.css'



function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </BrowserRouter>
  )
}

export default App;
