import React, {useState} from "react";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

//project data to add in project info
import projectData from "../data/projects";
console.log(projectData);


export default function Projects() {
	const [projects, setProjects] = useState(projectData);

	return(
		<div id="projects">
			<h1>Projects</h1>
			<ProjectForm projects={projects} setProjects={setProjects}/>
			<ProjectList projects={projects}/>
		</div>
	)
}


//Attempt 1:
// import React, {useState} from "react";
// import ProjectForm from "./ProjectForm";
// import ProjectList from "./ProjectList";

// //project data to add in project info
// import projectData from "../data/projects";
// console.log(projectData);


// export default function Projects() {
// 	const [projects, setProjects] = useState(projectData);

// 	return(
// 		<div id="projects">
// 			<h1>Projects</h1>
// 			<ProjectForm projects={projects} setProjects={setProjects}/>
// 			<ProjectList projects={projects}/>
// 		</div>
// 	)
// }