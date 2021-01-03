import './ProjectDisplay.css'

function ProjectDisplay(){

    return(
        <>
            <div className="project-display-box">
            <h3>Check out some holes you can throw your money into!</h3>
                {projects.map(project=>{
                    return <div key={project.id} className="project">
                        <div className="top-row">
                            <div className="top-row-icon">
                                Logo
                            </div>
                            <h2 className="project-title">{project.name}</h2>
                            <h2 className="project-goal">${project.fundingGoal}.00</h2>
                        </div>
                        <div className="desc-spacer">
                            <div className="image-placeholder">
                                Image
                            </div>
                            <h4 className="project-desc">{project.description}</h4>
                        </div>
                        </div>
                })}
            </div>
        </>
    )
}

export default ProjectDisplay
