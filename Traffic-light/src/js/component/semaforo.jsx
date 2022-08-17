import React, { useEffect, useState } from "react";

const Semaforo = () =>{

    const [red, setRed] = useState(false);
    const [yellow, setYellow] = useState(false);
    const [green, setGreen] = useState(false);
    // const [purple, setPurple] = useState(false);

    const encenderSemaforo = (color) => {
        if (color === "rojo"){
            setRed(!red)
            setYellow(false)
            setGreen(false)
        }
        if (color === "amarillo"){
            setRed(false)
            setYellow(!yellow)
            setGreen(false)
        }
        if (color === "verde"){
            setRed(false)
            setYellow(false)
            setGreen(!green)
        }
    }


    return (
        <div className="p-5 text-center d-flex justify-content-center">
			<div className="caja">
				<div onClick={() => encenderSemaforo("rojo")} className={`rojo ${red ? 'brillo' : null}`}></div>
				<div onClick={() => encenderSemaforo("amarillo")} className={`amarillo ${yellow ? 'brillo' : null}`}></div>
				<div onClick={() => encenderSemaforo("verde")} className={`verde ${green ? 'brillo' : null}`}></div>
			</div>
		</div>
    )
}



    // const fiesta = () => {
    //     let i = 0
    //     while (i < 345){
    //         encenderSemaforo("rojo")
    //         encenderSemaforo("amarillo")
    //         encenderSemaforo("verde")
    //         i++
    //     }
    // }


    // setTimeout(() => {
    //       setRed(!red)
    //     setYellow(false)
    //     setGreen(false)
    // },2000);

    // setTimeout(() => {
    //     setRed(false)
    //     setYellow(!yellow)
    //     setGreen(false)
    // },3000);

    // setTimeout(() => {
    //     setRed(false)
    //     setYellow(false)
    //     setGreen(!green)
    // },4000);


    // const moradito = (color) => {
    //     if (color === "purple")
    //     setRed(false)
    //     setYellow(false)
    //     setGreen(false)
    //     setPurple(!purple)
    // }

    // const comprobarColor = () => {
    //     if(purple) {
    //         "morado"
    //     } else if (green) {
    //         "brillo"
    //     } else {
    //         null
    //     }
    // }

    // return (
    //     <div className="p-5 text-center d-flex justify-content-center">
	// 		<div className="caja">
	// 			<div onClick={() => encenderSemaforo("rojo")} className={`rojo ${red ? 'brillo' : null}`}></div>
	// 			<div onClick={() => encenderSemaforo("amarillo")} className={`amarillo ${yellow ? 'brillo' : null}`}></div>
	// 			<div onClick={() => encenderSemaforo("verde")} className={`verde ${comprobarColor} ? 'morado' : null`}></div>
	// 		</div>
    //         <div>
    //         <button onClick={() => comprobarColor()}>¿Qué semaforo es este?</button>
    //         </div>
	// 	</div>
    // )
// }
// className={`${if (purple){ "morado"} else if (green) {"brillo"} else {null}}`}

export default Semaforo;