import React from "react";

const Navbar = () => {
    return (
        <div className="container-fluid d-flex justify-content-between bg-dark fixed-top">
            <div className="m-2 text-light pt-1">React</div>
            <div className="m-2">
            <ul className="nav collapse.navbar-collapse navbar-collapse">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Comprar</a>
        </li>
      </ul>
      </div>
      </div>
    )
}

export default Navbar;