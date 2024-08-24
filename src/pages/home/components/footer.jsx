import { FaGithub } from "react-icons/fa6";
import { FaKaggle } from "react-icons/fa6";
import { SiGooglecolab } from "react-icons/si";

import './footer.css'; // Asegúrate de crear y enlazar un archivo CSS para los estilos

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section social-media">
                    <h4>Follow Us</h4>
                    <a className="github" href="https://github.com/williamjesussierracordova/is3" target="_blank" rel="noopener noreferrer"><FaGithub style={{fontSize:'2.5rem'}}/></a>
                    <a className="kaggle" href="https://www.kaggle.com/code/paultimothymooney/predicting-idc-in-breast-cancer-histology-images/input" target="_blank" rel="noopener noreferrer"><FaKaggle style={{fontSize:'2.5rem'}}/></a>
                    <a className="colab" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><SiGooglecolab style={{fontSize:'2.5rem'}}/></a>
                </div>
                <div className="footer-section contact-info">
                    <h4>Contact Us</h4>
                    <p>Email: info@example.com</p>
                    <p>Phone: +51 999 999 999</p>
                </div>
                <div className="footer-section rights">
                    <p>&copy; 2024 Derechos reservados</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;