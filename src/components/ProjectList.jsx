import React from "react";
import ProjectCard from "./ProjectCard";

//child of Projects
export default function ProjectList({projects}) {
	return(
		<div>
			<h2>Project List</h2>
			{projects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	)
};

