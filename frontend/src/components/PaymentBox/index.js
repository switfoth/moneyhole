import './PaymentBox.css'
import {useSelector} from 'react-redux'

function PaymentBox(){
const payment = useSelector(state => state.payment)

    return(
        <div className="box">
            <h1>This is a Payment Box</h1>
        </div>
    )
}

export default PaymentBox
