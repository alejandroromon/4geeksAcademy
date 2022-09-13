import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid d-flex justify-content-between bg-dark">
        <div className="m-2 text-light">Primer proyecto con React</div>
        <div className="m-2">
        <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="www.instagram.com/alejandroromon"><i class="fa-brands fa-instagram"></i></a>
        </li>
    <li className="nav-item">
      <a className="nav-link" href="www.facebook.com"><i class="fa-brands fa-facebook"></i></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="www.twitter.com"><i class="fa-brands fa-twitter"></i></a>
    </li>
  </ul>
  </div>
  </div>

)
}
export default Footer;