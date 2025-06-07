import React, {useState} from "react";

//child of Projects
export default function ProjectForm({projects, setProjects}) {
	const [projectName, setProjectName] = useState('');
	const [description, setDescription] = useState('');
	const [language, setLanguage] = useState('');
	const [link, setLink] = useState('');

	
	
	//to handle submission
	function handleSubmit(e) {
		e.preventDefault()

		const newProject = {
			id: projects.length+1,
			name: projectName,
			description: description,
			language: language,
			link: link,
		};
		console.log("Adding New Project:", newProject);
		setProjects([...projects, newProject])
	}

	return(
		<div>
			<h2>Add Project</h2>
			<form className="NewProject" onSubmit={handleSubmit}>
				<input type="text" name="projectName" placeholder="Project Name..." 
					onChange = {(e)=>setProjectName(e.target.value)}/>
				<input type="text" name="description" placeholder="Description..." 
					onChange = {(e)=>setDescription(e.target.value)}/>
				<input type="text" name="language" placeholder="Languages Used..."
					onChange = {(e)=>setLanguage(e.target.value)}/>
				<input type="text" name="link" placeholder="Link..."
					onChange = {(e)=>setLink(e.target.value)}/>
				<button type="submit">Add</button>
			</form>
		</div>
	)
};