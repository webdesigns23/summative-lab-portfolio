import React from "react"

const ProjectCard = ({project}) => {
  return (
    <div>
      <h1>{project.name}</h1>
      <h2>{project.description}</h2>
      <li>Languages: {project.language}</li>
      <a href={project.link}>Check It Out!</a>
    </div>
  )
}

export default ProjectCard