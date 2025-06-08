import React, {useState} from "react";
import styles from '../styles/ProjectForm.module.css'

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
				<input className={styles.input} type="text" name="projectName" placeholder="Project Name..." 
					onChange = {(e)=>setProjectName(e.target.value)}/>
				<input className={styles.input} type="text" name="description" placeholder="Description..." 
					onChange = {(e)=>setDescription(e.target.value)}/>
				<input className={styles.input} type="text" name="language" placeholder="Languages Used..."
					onChange = {(e)=>setLanguage(e.target.value)}/>
				<input className={styles.input} type="text" name="link" placeholder="Link..."
					onChange = {(e)=>setLink(e.target.value)}/>
				<button className={styles.button} type="submit">Add</button>
			</form>
		</div>
	)
};





// // //Attempt 1:
// import React, {useState} from "react";
// import styles from '../styles/ProjectForm.module.css'

// //child of Projects
// export default function ProjectForm({formData, setFormData, setNewItems}) {
	
// 	function handleChange(event) {
//     const {name,value} = event.target

//     setFormData(prevFormData => ({
//       ...prevFormData, [name]:value
      
//     }))
//   }

//   function handleSubmit(event) {
//     event.preventDefault()

//     setNewItems(prevItems => {
//       const newProject = {
//         id: prevItems.length + 1,  
//         ...formData             
//       };
//       return [...prevItems, newProject];
//     });
//   }

// 	return(
// 		<div className={styles.div}>
// 			<h2>Add Project</h2>
// 			<form onSubmit={handleSubmit}>
				
// 				<label>Project Title:</label>	
// 				<input className={styles.input} type="text" name="name" value={formData.name} placeholder="Project Name..." 
// 					onChange = {handleChange} required/>
							
// 				<label>Description:</label>
// 				<input className={styles.input} type="text" name="description" value={formData.description} placeholder="Description..." 
// 					onChange = {handleChange} required/>
				
// 				<label>Languages:</label>
// 				<input className={styles.input} type="text" name="language" value={formData.language}	 placeholder="Languages Used..."
// 					onChange = {handleChange} required/>	
			
// 				<label>Link:</label>
// 				<input className={styles.input} type="text" name="link" value={formData.link} placeholder="Link..."
// 					onChange = {handleChange}required/>	
								

// 				<button className={styles.button} type="submit">Add</button>
// 			</form>
// 		</div>
// 	)
// };








// //Attempt 2:
// export default function ProjectForm({projects, setProjects}) {
// 	const [projectName, setProjectName] = useState('');
// 	const [description, setDescription] = useState('');
// 	const [language, setLanguage] = useState('');
// 	const [link, setLink] = useState('');

// 	function handleSubmit(e){
// 		e.preventDefault();
		
// 	const newId = projects.length > 0 ? projects[projects.length - 1].id + 1 : 1;

// 	const newProject = {
// 		id: newId, 
// 		name: projectName, 
// 		description: description, 
// 		language: language, 
// 		link: link
// 	};

// 		setProjects([...projects, newProject]);		
// 	};


// 	return(
// 		<div>
// 			<h2>Add Project</h2>
// 			<form className="NewProject" onSubmit={handleSubmit}>
				
// 				<label>Project Title:</label>	
// 				<input type="text" name="name"  placeholder="Project Name..." 
// 					onChange = {(e)=>setProjectName(e.target.value)} required/>
							
// 				<label>Description:</label>
// 				<input type="text" name="description" placeholder="Description..." 
// 					onChange = {(e)=>setDescription(e.target.value)} required/>
				
// 				<label>Languages:</label>
// 				<input type="text" name="language"  placeholder="Languages Used..."
// 					onChange = {(e)=>setLanguage(e.target.value)} required/>	
			
// 				<label>Link:</label>
// 				<input type="text" name="link" placeholder="Link..."
// 					onChange = {(e)=>setLink(e.target.value)} required/>	
								

// 				<button type="submit">Add</button>
// 			</form>
// 		</div>
// 	)
// };