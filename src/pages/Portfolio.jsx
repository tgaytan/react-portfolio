import Project from '../components/Project'
import projects from '../projects'

function Portfolio() {
    console.log(projects)
    return (
        <>
            <div className="container text-center">
                <div className="row">
                {projects.map(project => {
                    return (
                        <div key={project.name} className="row">
                            <Project projects={project} key={project.name}/>
                        </div>
                    )
                })}
                </div>
            </div>
            {/* <div class="container text-center">
                <div class="row">
                    <div class="col">
                    Column
                    </div>
                    <div class="col">
                    Column
                    </div>
                    <div class="col">
                    Column
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Portfolio