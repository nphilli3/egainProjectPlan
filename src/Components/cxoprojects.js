import React from 'react';
import ProjectCard from './cards/projectcard'



const projects = [
	{
		title: 'Auto Login',
		description: 'Use RFID technology to automatically log an agent into their computer when they sit down.',
		leader: 'None Yet'
	}
]

const Product = (props) =>{
	return(
		<div>
			<ProjectCard 
				projectTitle={projects[0].title}
				projectText={projects[0].description}
				buttonLabel={projects[0].leader}
			></ProjectCard>
		</div>
		)
}
export default Product