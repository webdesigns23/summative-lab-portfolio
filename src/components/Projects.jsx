import React from "react";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

//project data to add in project info
import projects from "../data/projects";
console.log(projects);

export default function Projects() {
	return(
		<div id="projects">
			<ProjectForm />
			<ProjectList projects={projects}/>
		</div>
	)
}