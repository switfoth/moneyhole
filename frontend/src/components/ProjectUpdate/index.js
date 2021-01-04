import './ProjectUpdate.css'
import {useSelector} from 'react-redux'

function ProjectUpdate(){
const update = useSelector(state => state.update)

    return(
        <div className="project-update-container">
            <h1>This is a Project Update</h1>
        </div>
    )
}

export default ProjectUpdate
