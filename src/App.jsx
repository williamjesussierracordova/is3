import './App.css'
import { Route, Routes } from "react-router-dom";
import Login from './pages/accessibility/login/login';
import Signup from './pages/accessibility/signup/signup';
import RecoverPassword from './pages/accessibility/recoverPassword/recoverPassword';
import Home from './pages/home/page/inicio';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Signup/>}/>
        <Route path="/recover_password" element={<RecoverPassword/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
