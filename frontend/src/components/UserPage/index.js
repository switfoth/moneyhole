import './UserPage.css';
import BackedProject from '../BackedProject';
import HomePageProjectUpdate from '../HomePageProjectUpdate';
import AccountDetails from '../AccountDetails';
import PaymentMethods from '../PaymentMethods';

function UserPage(){

    return(
        <div className="user-page">
            <h1>This is the User Page</h1>
            <div className="backed-project-updates">
                <div className="userpage-top-row">
                    <AccountDetails/>
                    <BackedProject/>
                </div>
                <div className="userpage-bottom-row">
                    <PaymentMethods/>
                    <HomePageProjectUpdate className="project-update-modifier"/>
                </div>
            </div>
        </div>
    )
}

export default UserPage
