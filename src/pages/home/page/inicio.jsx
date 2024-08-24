import Footer from "../components/footer";
import Header from "../components/header";
import './inicio.css';

const inicio = () => {
    return (
        <>
        <div className="home">
            <Header/>
            <div className="home-container">
                <h1>Inicio</h1>
                <p>Bienvenido a la página de inicio</p>
                <h1>Inicio</h1>

            </div>
            <Footer/>
            </div>
        </>
    )
}

export default inicio;