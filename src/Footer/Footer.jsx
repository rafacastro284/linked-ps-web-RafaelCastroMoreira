import './Footer.css'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

function Footer() {
  return (
    <footer className="footer">

      {/* EMPRESA */}
      <div className="footer-coluna">
        <h3 className="footer-titulo">EMPRESA:</h3>
        <span href="#" className="footer-social-item">
          <img src={facebook} alt="Facebook" className="footer-social-icon" />
          <span>Facebook</span>
        </span>
        <span href="#" className="footer-social-item">
          <img src={instagram} alt="Instagram" className="footer-social-icon" />
          <span>Instagram</span>
        </span>
        <span href="#" className="footer-social-item">
          <img src={linkedin} alt="LinkedIn" className="footer-social-icon" />
          <span>LinkedIn</span>
        </span>
      </div>

      {/* ACESSO RÁPIDO */}
      <div className="footer-coluna">
        <h3 className="footer-titulo">ACESSO RÁPIDO:</h3>
        <span href="#inicio"    className="footer-link">Início</span>
        <span href="#servicos"  className="footer-link">Nossos Serviços</span>
        <span href="#horarios"  className="footer-link">Horários</span>
        <span href="#feedbacks" className="footer-link">Feedbacks</span>
        <span href="#contato"   className="footer-link">Contato</span>
      </div>

      {/* SERVIÇOS */}
      <div className="footer-coluna">
        <h3 className="footer-titulo">SERVIÇOS:</h3>
        <span className="footer-texto">Serviço 1</span>
        <span className="footer-texto">Serviço 2</span>
        <span className="footer-texto">Serviço 3</span>
      </div>

      {/* CONTATO */}
      <div className="footer-coluna">
        <h3 className="footer-titulo">CONTATO:</h3>
        <span className="footer-texto">Rua, número</span>
        <span className="footer-texto">Bairro</span>
        <span className="footer-texto">+55 (01)23456-7890</span>
        <span className="footer-texto">email@email.com</span>
      </div>

    </footer>
  )
}

export default Footer