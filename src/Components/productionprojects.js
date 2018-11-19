import React from 'react';
import ProjectCard from './cards/projectcard'



const projects = [
	{
		title: 'Security',
		description: 'Integrate home security with alexa and the hopper.',
		leader: 'Leon Pennington'
	},{
		title: 'Immersive',
		description: 'Create an immersive lighting experience through pixel mapping technology.',
		leader: 'RoDreko Steward'
	},{
		title: 'Smart Fence',
		description: 'Integrate electric fences with IOT to notify of problems in the circuit.',
		leader: 'Matt Bunfill'
	}
]

const ProductionProject = (props) =>{
	const p0 = projects[0]
	const p1 = projects[1]
	const p2 = projects[2]
	const placeholder = 'Tell us how you think you can help. Include project name'
	return(
		<div>
			<ProjectCard 
				projectTitle={p0.title}
				projectText={p0.description}
				buttonLabel={p0.leader}
				placeholder={placeholder}
			></ProjectCard>
			<ProjectCard 
				projectTitle={p1.title}
				projectText={p1.description}
				buttonLabel={p1.leader}
				placeholder={placeholder}
			></ProjectCard>
			<ProjectCard 
				projectTitle={p2.title}
				projectText={p2.description}
				buttonLabel={p2.leader}
				placeholder={placeholder}
			></ProjectCard>
		</div>
		)
}
export default ProductionProject