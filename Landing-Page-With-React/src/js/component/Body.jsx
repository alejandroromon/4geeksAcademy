import React from "react";

const Body = () => {

    const carta = [{
        imagen:"https://upload.wikimedia.org/wikipedia/commons/b/bf/LeBron_James_-_51959723161_%28cropped%29.jpg",
        titulo:"Lebron James",
        texto:"LeBron Raymone James Sr. es un jugador de baloncesto estadounidense que actualmente pertenece a la plantilla de Los Angeles Lakers de la NBA. Con 2,06 metros de estatura, su posición es la de alero, pero su talento, versatilidad y poderío físico le permiten jugar tanto de base como de ala-pívot.​",
    },
    {
        imagen:"https://upload.wikimedia.org/wikipedia/commons/3/36/Stephen_Curry_dribbling_2016_%28cropped%29.jpg",
        titulo:"Stephen Curry",
        texto:"Wardell Stephen Curry II, más conocido como Stephen Curry, es un jugador estadounidense de baloncesto que pertenece al equipo de los Golden State Warriors de la NBA. Con 1,88 metros de altura, juega en la posición de base.",
    },
    {
        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Michael_Jordan_in_2014.jpg/245px-Michael_Jordan_in_2014.jpg",
        titulo:"Michael Jordan",
        texto:"Michael Jeffrey Jordan es un exjugador de baloncesto estadounidense. Con 1,98 metros de altura, jugaba en la posición de escolta. Es considerado por la mayoría de aficionados y especialistas como el mejor jugador de baloncesto de todos los tiempos.​",
    },
    {
        imagen:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Giannis_Antetokounmpo_%2851664127127%29_%28cropped%29.jpg",
        titulo:"Giannis Antetokounmpo",
        texto:"Giannis Ougko Antetokounmpo es un baloncestista griego de ascendencia nigeriana que pertenece a la plantilla de los Milwaukee Bucks de la NBA. Con 2,11 metros de altura, juega en la posición de ala-pívot, pero debido a su gran versatilidad es capaz de jugar tanto de alero como de pívot.",
    },
]
    return ( 
        <div className="row row-cols-1 row-cols-md-4 g-4 m-4">
            {carta.map((item,i) => (
            <div key={i} className="col">
          <div className="card">
            <img src={item.imagen} className="card-img-top img-thumbnail" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.titulo}</h5>
              <p className="card-text">{item.texto}</p>
            </div>
          </div>
          </div> 
            ))}
          </div>
    )
}
export default Body;