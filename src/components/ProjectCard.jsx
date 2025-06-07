import React from "react"

const ProjectCard = ({project}) => {
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <li>Languages: {project.language}</li>
      <a href={project.link}>Check It Out!</a>
    </div>
  )
}

export default ProjectCard