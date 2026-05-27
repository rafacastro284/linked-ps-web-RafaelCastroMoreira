import './Horario.css'
import clock from './assets/clock.png'
import florEsquerda from './assets/flor-fundo-esq.png'
import florDireita from './assets/flor-fundo-dir.png'

function Horario() {
  return (
    <section id="horarios" className='horario'>
      <img src={florEsquerda} alt='' className='horario-flor horario-flor--esquerda' />
      <img src={florDireita} alt='' className='horario-flor horario-flor--direita' />

      <div className='horario-titulo-wrapper'>
        <h2 className='horario-titulo'>Horário de Atendimento.</h2>
        <p className='horario-subtitulo'>
          Estamos disponíveis para agendamento de consultas e visitas.
        </p>
        <hr className='horario-linha' />
      </div>

      <div className='horario-card'>
        <img src={clock} alt='Relógio' className='horario-clock' />
        <table className='horario-tabela'>
          <tbody>
            <tr>
              <td>Segunda - Sexta</td>
              <td>08:00 - 17:00</td>
            </tr>
            <tr>
              <td>Sábado</td>
              <td>10:00 - 14:00</td>
            </tr>
            <tr>
              <td>Domingo</td>
              <td className='fechado'>Fechado</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Horario