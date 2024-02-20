import Project from '../components/Project'
import projects from '../projects'

function Portfolio() {
    return (
        <>
            <h1 className="text-background title" id="portfolio-title">Portfolio</h1>
            <div id="projects-body">
                    {projects.map(project => {
                        return (
                            <div key={project.name} className="project-pic">
                                <Project projects={project} key={project.name}/>
                            </div>
                        )
                    })}    
            </div>
        </>
    )
}

export default Portfolio