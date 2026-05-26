import './Servicos.css'

function Servicos() {
  return (
    <section className="servicos">
      <div className="servicos-inner">
        <h2 className="servicos-titulo">Nossos Serviços.</h2>
        <p className="servicos-subtitulo">
          Qualidades que trazem toda diferença para o paciente.
        </p>
        <hr className="servicos-linha" />
        <p className="servicos-corpo">
          <strong>Lorem ipsum</strong> dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.{' '}
          <strong>Duis aute irure dolor</strong> in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in{' '}
          <strong>culpa qui officia deserunt mollit anim</strong> id est laborum.
        </p>
      </div>
    </section>
  )
}

export default Servicos