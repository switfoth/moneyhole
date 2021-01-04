import './PaymentMethods.css'
import {useSelector} from 'react-redux'

function PaymentMethods(){
const paymentMethod = useSelector(state => state.paymentmethod)

    return(
        <div className="payment-methods-container">
            <h3>These are payment methods</h3>
        </div>
    )
}

export default PaymentMethods
