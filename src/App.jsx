import './App.css'
import { Route, Routes } from "react-router-dom";
import Login from './pages/accessibility/login/login';
import Signup from './pages/accessibility/signup/signup';
import RecoverPassword from './pages/accessibility/recoverPassword/recoverPassword';
import Home from './pages/home/inicio';
import ContactPage from './pages/contact/contact';
import AboutPage from './pages/about/about';
import Cases from './pages/cases/cases';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Signup/>}/>
        <Route path="/recover_password" element={<RecoverPassword/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cases/:idCase' element={<Cases />} />
      </Routes>
    </>
  )
}

export default App
