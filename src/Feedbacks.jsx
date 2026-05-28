import './Feedbacks.css'
import feedbacksImg from './assets/feedbacks.png'

function Feedbacks() {
  return (
    <section id="feedbacks" className="feedbacks">

      <div className="feedbacks-texto">
        <h2 className="feedbacks-titulo">Feedbacks.</h2>
        <p className="feedbacks-subtitulo">Quem conhece, confia.</p>
        <hr className="feedbacks-linha" />
        <p className="feedbacks-item">
          <span className="feedbacks-bullet">•</span>
          <span>
            <strong>"Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            <br />
            <span className="feedbacks-cliente">– Cliente 1, 2026</span>
          </span>
        </p>

        <p className="feedbacks-item">
          <span className="feedbacks-bullet">•</span>
          <span>
            <strong>"Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            <br />
            <span className="feedbacks-cliente">– Cliente 2, 2026</span>
          </span>
        </p>

        <p className="feedbacks-item">
          <span className="feedbacks-bullet">•</span>
          <span>
            <strong>"Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            <br />
            <span className="feedbacks-cliente">– Cliente 3, 2025</span>
          </span>
        </p>
      </div>

      <img src={feedbacksImg} alt="Feedbacks" className="feedbacks-imagem" />

    </section>
  )
}

export default Feedbacks