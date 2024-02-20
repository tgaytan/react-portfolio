function Project({ projects }) {
    return (
        <>
            <a href={projects.repoURL}>
            <img src={projects.image} alt={projects.name}/>
            </a>
        </>
    )
}

export default Project


