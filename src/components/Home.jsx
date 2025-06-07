import React from "react";

//Home a Child of App
function Home({color, name, city}) { //funtion args added as user props in ()
	return(
		<div id= "home">
			<h1>
				Project Portfolio
			</h1>
			<h2>{name} is a Web Developer from {city}</h2>
		</div>
	);
}

export default Home;