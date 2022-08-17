import React, { useState } from "react";
import  "./trafficLight.css"
import "./semaforo.jsx"
import Semaforo from "./semaforo.jsx";

//create your first component
const Home = () => {

// 	const [red, setRed] = useState(false);
// 	const [yellow, setYellow] = useState(false);
// 	const [green, setGreen] = useState(false);

// 	const handleTrafficLight = (color) => {
// 		if (color === "rojo") {
// 			setRed(!red)
// 			setYellow(false)
// 			setGreen(false)
// 		}
// 		if (color === "amarillo") {
// 			setRed(false)
// 			setYellow(!yellow)
// 			setGreen(false)
// 		}
// 		if (color === "verde") {
// 			setRed(false)
// 			setYellow(false)
// 			setGreen(!green)
// 		}
// 	}

// 	return (
// 		<div className="p-5 text-center d-flex justify-content-center">
// 			<div className="caja">
// 				<div onClick={() => handleTrafficLight("rojo")} className={`rojo ${red ? 'brillo' : null}`}></div>
// 				<div onClick={() => handleTrafficLight("amarillo")} className={`amarillo ${yellow ? 'brillo' : null}`}></div>
// 				<div onClick={() => handleTrafficLight("verde")} className={`verde ${green ? 'brillo' : null}`}></div>
// 			</div>
// 		</div>
// 	);
// };

	return(

		<Semaforo />
	)
	}
export default Home;
