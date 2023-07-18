import logo from "../../assets/logo.png";
import "../navbar/navbar.css"

export default function Navbar() {

  return(
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a href="#home" className="nav-link"><img src={logo} alt="logo" /> Travel-Website</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pacotes">Pacotes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#promocoes">Promoções</a>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  )

}