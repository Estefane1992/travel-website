
import "../navbar/navbar.css"


export default function Navbar() {

  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a href="#home" className="nav-link">Travel-Website</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link home-link" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link destinos-link" href="#destinos">Destinos</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )

}