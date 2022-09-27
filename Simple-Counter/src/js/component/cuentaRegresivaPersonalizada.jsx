// import React, { useEffect, useState } from 'react';

// const CuentaRegresivaPersonalizada = () =>{

//     let tiempo = 0;
//     const [backwards, setBackwards] = useState(tiempo);
//     const [count, setCount] = useState(0);
        
//     const cuantoTiempoQueda = () => {
//         setCount(count + 1);
//         tiempo = window.prompt("¿Cuantos segundos quieres de cuenta atras?")
        
//         if (isNaN(tiempo)) {
//             alert("Introduce un número valido")
//             return;
//         }
        
//         tiempo = parseInt(tiempo)
//         setBackwards(tiempo)
//     }
    
    
//     setTimeout(() => {
//         if (backwards === 0 && count > 0) {
//             alert("Tu tiempo ha acabado")
//             return;
//         }

//         if (count > 0) setBackwards(backwards - 1); 

// }, 1000);

// return(
//     <body className="m-5 row justify-content-center bg-body">
//         <div className="col-4 bg-black text-light">
//             <h1 className="text-center mt-5 bg-dark">
//                 <div>{backwards}</div>
//             </h1>
//             <div>
//                 <button className="justify-content-center text-center"  onClick={() => cuantoTiempoQueda()}>Cuenta atras</button>
//             </div>
//         </div>
//     </body>
// )
// }

// export default CuentaRegresivaPersonalizada;