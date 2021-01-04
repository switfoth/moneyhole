import './ProjectPage.css'
import ProjectUpdate from '../ProjectUpdate'
import GoalBox from '../GoalBox'
import RewardBox from '../RewardBox'
import {useSelector} from 'react-redux'

function ProjectPage(){
const project = useSelector(state => state.project)

    return(
        <div className="reward-page">
            <div className="project-page-top-row">
                <div className="project-page-top-left">
                    <h1>This is a Project Page</h1>
                    <h2>There will be buttons for Updates and Comments above the description.</h2>
                </div>
                <div>
                    <RewardBox/>
                </div>
            </div>
            <GoalBox/>
        </div>
    )
}

export default ProjectPage
