import React from "react";

//Home a Child of App
function Home({color, name, city}) { //funtion args added as user props in ()
	return(
		<div id= "home">
			<h1 style = {
				{color: color}
			}>
				{name} is a Web Developer from {city}
			</h1>
		</div>
	);
}

export default Home;