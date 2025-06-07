import React,{useState} from "react";
import ProjectCard from "./ProjectCard";


//child of Projects
export default function ProjectList({projects}) {

	//search bar
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredProjects, setFilteredProjects] = useState(projects);

	const handleSearch = (event) => {
		
		const term = event.target.value;
		setSearchTerm(term);
		
		const filtered = projects.filter((project) =>
        project.name.toLowerCase().includes(term.toLowerCase())
         );
        setFilteredProjects(filtered);
    };

	return(
		<div>
			<label>Search Projects:</label>
			 <input
        		type="text"
        		placeholder="Search projects..."
        		value={searchTerm}
        		onChange={handleSearch}
      		/>


			<h2>Project List</h2>
			{filteredProjects.map((project) => (
				<ProjectCard key={project.id} project={project} />
			))}
		</div>
	)
};

