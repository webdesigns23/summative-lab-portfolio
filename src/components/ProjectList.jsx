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

	//add project

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


// //Attempt 1:
// import React,{useState} from "react";
// import ProjectCard from "./ProjectCard";


// //child of Projects
// export default function ProjectList({projects}) {

// 	//search bar
// 	const [searchTerm, setSearchTerm] = useState('');
// 	const [filteredProjects, setFilteredProjects] = useState(projects);

// 	const handleSearch = (event) => {
		
// 		const term = event.target.value;
// 		setSearchTerm(term);
		
// 		const filtered = projects.filter((project) =>
//         project.name.toLowerCase().includes(term.toLowerCase())
//          );
//         setFilteredProjects(filtered);
//     };


// 	return(
// 		<div>
// 			<label>Search Projects:</label>
// 			 <input
//         		type="text"
//         		placeholder="Search projects..."
//         		value={searchTerm}
//         		onChange={handleSearch}
//       		/>
// 			<h2>Project List</h2>
// 			{filteredProjects.map((project) => (
// 				<ProjectCard key={project.id} project={project} />
// 			))}
// 		</div>
// 	)
// };




// //Attempt 2:
// import React,{useState} from "react";
// import ProjectCard from "./ProjectCard";
// import ProjectForm from "./ProjectForm";
// import Filter from "./Filter";

// export default function ProjectList({projects}) {

// 	const[formData, setFormData] = useState('');

//   	const [newItems, setNewItems] = useState(projects);

//   	const [searchInfo, setSearchInfo] = useState('');

//   	const itemsToDisplay = newItems.filter((projects) => {
//     	const matchesSearch = projects.name.toLowerCase().includes(searchInfo.toLowerCase());

//     	return matchesSearch;
//   	});  

//  	 console.log(itemsToDisplay);
 

// 	return(
// 		<div>
// 		<ProjectForm
// 			formData={formData}
// 			setFormData={setFormData}
// 			setNewItems={setNewItems}/>
			
// 		<h2>Project List</h2>
// 		<Filter 
//         onCategoryChange={handleChange} 
//         searchInfo={searchInfo} 
//         setSearchInfo={setSearchInfo}/>
//       		<ul className="Items">
//         	{itemsToDisplay.map((project) => (
//           	<ProjectCard key={project.id} project={project} />
//         	))}
//       		</ul>
// 		</div>
// 	)
// };


//Filter Component Try
// import React from "react";

// //Attempt 2 added Filter Component:
// function Filter({search, setSearch}) {

//   function handleChange(event) {
//     setSearch(event.target.value)
//   };

//   return (
//     <div className="Filter">
// 		<label>Search Projects:</label>
// 			 <input
//         		type="text"
//         		placeholder="Search projects..."
//         		value={search}
//         		onChange={handleChange}
//       		/> 
//     </div>
//   );
// }

// export default Filter;
