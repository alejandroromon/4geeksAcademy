// import React, { useEffect, useState } from 'react';

// const Box = () => {
//     const [segundos, setSegundos] = useState(0);
//     const [minutos, setMinutos] = useState(0);
//     const [horas, setHoras] = useState(0);

//     setTimeout(() => {
//         setSegundos(segundos + 1);
//         if (segundos === 5) {
//             setMinutos(minutos + 1);
//             setSegundos(0);
//             if (minutos === 59) {
//                 setMinutos(0);
//                 setHoras(horas + 1);
//             }
//         } console.log(horas, minutos, segundos);
       
//     },1000);

//     return(
//         <body className="m-5 row justify-content-center bg-body">
//             <div className="col-4 bg-black text-light">
//                 <h1 className="text-center mt-5 bg-dark">
//                     <div>{horas}</div>
//                     <div>{minutos}</div>
//                     <div>{segundos}</div>
//                 </h1>
//             </div>
// 		</body>
//     )
// }

// // export default Box;

// // CODIGO DE ADSON

// // const Box = () => {
// //     const [segundos, setSegundos] = useState(0);
// //     const [minutos, setMinutos] = useState(0);
// //     const [horas, setHoras] = useState(0);

// //     setTimeout(() => {
// //         setSegundos(segundos + 1);
// // 		if (segundos === 5) {
// // 			setSegundos(0);
// // 			setMinutos(minutos + 1);
// // 			if (minutos === 59) {
// // 				setMinutos(0);
// // 				setHoras(horas + 1);
// // 			}
// // 		}
// //     }, 1000);

// //     return (
// //         <body className="m-5 row justify-content-center bg-body">
// //             <div className="col-4 bg-black text-light">
// //                 <h1 className="text-center mt-5 bg-dark">
// //                     <div>{String(horas).padStart(2, '0')} : {String(minutos).padStart(2, '0')} : {String(segundos).padStart(2, '0')}</div>
// //                 </h1>
// //             </div>
// //         </body>
// //     );
// // };

// export default Box;