import React from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		
		<div className="container-fluid p-0"><Navbar/>
		<div><Header/></div>
		<div><Body/></div>
		<div><Footer/></div>
		</div>
	);
};

export default Home;
