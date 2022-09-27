import React, { useEffect, useState } from 'react';

const SimpleCounter = () =>{

        const [cuenta, setCuenta] = useState(0);
    
        setTimeout(() => {
            setCuenta(cuenta + 1); 
        },1000);
    
        return(
            <body className="m-5 row justify-content-center bg-body">
                <div className="col-4 bg-black text-light">
                    <h1 className="text-center mt-5 bg-dark">
                        <div>{cuenta}</div>
                    </h1>
                </div>
            </body>
        )
    }

export default SimpleCounter