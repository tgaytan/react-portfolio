import Project from '../components/Project'
import projects from '../projects'

function Portfolio() {
    return (
        <div id="portfolio-body">
                {projects.map(project => {
                    return (
                        <div key={project.name} className="project-pic">
                            <Project projects={project} key={project.name}/>
                        </div>
                    )
                })}    
        </div>
    )
}

export default Portfolio