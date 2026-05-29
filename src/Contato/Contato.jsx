import './Contato.css'
import mapa from '../assets/mapa.png'
import florEsq from '../assets/flor3-fundo-esq.png'
import florDir from '../assets/flor4-fundo-dir.png'
import Location from '../assets/location.png'

function Contato() {
  return (
    <section id="contato" className="contato">

      <img src={florEsq} alt="" className="contato-flor contato-flor-esq" />
      <img src={florDir} alt="" className="contato-flor contato-flor-dir" />

      <div className="contato-localizacao">
        <div className="contato-card">
          <h2>Visite-nos</h2>
          <div className="contato-endereco-titulo">
            <img src={Location} alt="Localização" className="contato-localizacao-icon" />
            <span>ENDEREÇO:</span>
          </div>
          <p>Rua, número</p>
          <p>Bairro</p>
          <br />
          <p>CEP: 40028922</p>
        </div>

        <div className="contato-mapa">
          <img src={mapa} alt="Mapa de localização" />
        </div>
      </div>

      <div className="contato-formulario">
        <div className="contato-form-topo">
          <h3 className="contato-form-titulo">Formulário de contato</h3>
          <span className="contato-form-subtitulo">
            Ficou com alguma dúvida? Converse diretamente conosco!
          </span>
        </div>

        <form className="contato-form">
          <div className="contato-input-grupo">
            <span>Nome:</span>
            <input type="text" />
          </div>
          <div className="contato-input-grupo">
            <span>Email:</span>
            <input type="email" />
          </div>
          <div className="contato-input-grupo">
            <span>Obs:</span>
            <input type="text" />
          </div>

          <button type="submit" className="contato-btn-enviar">
            <span className="contato-btn-circulo"></span>
            ENVIAR
          </button>
        </form>
      </div>

    </section>
  )
}

export default Contato