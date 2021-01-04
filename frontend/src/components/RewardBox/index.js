import './RewardBox.css'
import {useSelector} from 'react-redux'

function RewardBox(){
const reward = useSelector(state => state.reward)

    return(
        <div className="reward-container">
            <h1>This is a Reward</h1>
        </div>
    )
}

export default RewardBox
