import './App.css'
import { Route, Routes } from "react-router-dom";
import Login from './pages/accessibility/login/login';
import Signup from './pages/accessibility/signup/signup';
import RecoverPassword from './pages/accessibility/recoverPassword/recoverPassword';
import Home from './pages/home/page/inicio';
import ContactPage from './pages/contact/contact';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Signup/>}/>
        <Route path="/recover_password" element={<RecoverPassword/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App
