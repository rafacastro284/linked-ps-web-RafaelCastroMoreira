import './Header.css'
function Header() {
  return (
    <header>
      <nav>
        <div className="logo">Nome / Logo</div>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#horarios">Horários</a></li>
          <li><a href="#feedbacks">Feedbacks</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header