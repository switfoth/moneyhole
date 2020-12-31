import './ProjectDisplay.css'
const projects = [{ id: 1,
    name: "Ambitious RPG",
    userId: "Dreamer",
    fundingGoal: 1000000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    twitter: "Twitter.com",
    facebook: "OldMenGoHere",
    email: "selesnya@gmail.com"},
    { id: 2,
        name: "Old Pro Making Solo Project",
    userId: "JackKirby",
    fundingGoal: 10000,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    twitter: "Twitter.com",
    facebook: "OldMenGoHere",
    email: "hasbeen@gmail.com"},
    { id: 3,
        name: "Making a Sandwich",
    userId: "Deadbeat",
    fundingGoal: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    twitter: "Twitter.com",
    facebook: "OldMenGoHere",
    email: "hungry@gmail.com"},
    { id: 4,
        name: "Webcomic",
        userId: "Hopeless Guy",
        fundingGoal: 3000,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        twitter: "Twitter.com",
        facebook: "OldMenGoHere",
        email: "swiffuth@thoseunblowable.com"},
]

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
