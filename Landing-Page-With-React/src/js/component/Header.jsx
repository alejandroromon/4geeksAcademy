import React from "react";

const Header = () => {
    return (
        <div className="p-5 m-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Ellos cambiaron la historia</h1>
        <p className="col-md-8 fs-4">Hay jugadores que marcan una epoca y se les reconoce como los mejores de su tiempo. Por encima de estos se encuentran los que generan una influencia en futuras generaciones y hacen que el juego evolucione a su alrededor convirtiendose en los mejores jugadores de la historia.</p>
        <a href="https://www.google.com/search?client=firefox-b-d&q=los+mejores+jugadores+de+la+nba"><button className="btn btn-primary btn-lg" type="button">No pinches aquí</button></a>
      </div>
    </div>
    )
}

export default Header;