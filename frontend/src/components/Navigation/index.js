import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <>
      <div className="navBar">
        <div className="navButtons">
          <div className="moneyholeLogo">
            <NavLink exact to="/" >Moneyhole</NavLink>
          </div>
          <div className="profileLinks">
            {isLoaded && sessionLinks}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
