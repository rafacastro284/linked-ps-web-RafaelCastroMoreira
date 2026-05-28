import './Capa.css'
import psicologa from '../assets/psicologa.png'

function Capa() {
  return (
    <section id="inicio" className="capa">
      <div className="capa-esquerda">
        <p className="capa-subtitulo">Consultório de psicologia e psicoterapia.</p>
        <div className="capa-texto">
          <h1>Lorem Ipsum.</h1>
          <p className="capa-descricao">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="capa-botoes">
            <button className="btn-agendar">
              <span className="btn-circulo"></span>
              AGENDAR
            </button>
            <button className="btn-saiba">
              <span className="btn-circulo"></span>
              SAIBA MAIS
            </button>
          </div>
        </div>
      </div>
      <div className="capa-imagem">
        <img src={psicologa} alt="Psicóloga" />
      </div>
    </section>
  )
}

export default Capa