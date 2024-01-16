import Project from '../components/Project'
import projects from '../projects'

function Portfolio() {
    return (
        <>
            {projects.map(project => {
                return <Project projects={project} key={project.name}/>
            })}
        </>
    )
}

export default Portfolio