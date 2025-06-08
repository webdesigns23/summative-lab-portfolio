import React from "react";


//About a Child of App
function About({bio, image, name}) {
	return(
		<div id="about">
			<h1>About Me</h1>
			<img src={image} alt={name} />
			<p>{bio}</p>
		</div>
	);
}

export default About; 