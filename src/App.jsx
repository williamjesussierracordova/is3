import './App.css'
import { Route, Routes } from "react-router-dom";
import Login from './login/login';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </>
  )
}

export default App
