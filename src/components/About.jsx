import React from "react";


//About a Child of App
function About({bio, image, name}) {
	return(
		<div id="about">
			<h2>About Me</h2>
			<img src={image} style={{width: '60%'}} alt={name} />
			<p>{bio}</p>
		</div>
	);
}

export default About; 