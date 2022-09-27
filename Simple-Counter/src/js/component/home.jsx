import React from "react";
import Box from "./clock.jsx";
import SimpleCounter from "./simpleCounter.jsx"
import SimpleRegresiveCounter from "./simpleRegresiveCounter.jsx"
import CuentaRegresivaPersonalizada from "./cuentaRegresivaPersonalizada.jsx"


//create your first component
const Home = () => {
	return (
		<div>
			<SimpleCounter />
			{/* <SimpleRegresiveCounter />
			<Box />
			<CuentaRegresivaPersonalizada /> */}
		</div>
	);
};

export default Home;
