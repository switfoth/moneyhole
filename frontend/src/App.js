import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import ProjectDisplay from './components/ProjectDisplay';
import ProjectPage from './components/ProjectPage';
import HomePageProjectUpdate from './components/HomePageProjectUpdate';
import UserPage from './components/UserPage';
import * as sessionActions from './store/session.js';
import './index.css';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    dispatch(sessionActions.restoreSessionUser()).then(()=>setIsLoaded(true))
  }, [dispatch])

  return (
    <>
      <div className="background">
          <Navigation isLoaded={isLoaded}/>
            {isLoaded && (
              <div className="site-wrapper">
                <Switch>
                  <Route path="/login">
                    <LoginFormPage/>
                  </Route>
                  <Route path="/signup">
                    <SignupFormPage/>
                  </Route>
                  <Route path="/" exact>
                    <div className="homepage-display">
                      <ProjectDisplay/>
                      <HomePageProjectUpdate/>
                    </div>
                  </Route>
                  <Route path="/project">
                    <ProjectPage/>
                  </Route>
                  <Route path="/account">
                    <UserPage/>
                  </Route>
                  <Route>
                    <h1>We can't find that page!</h1>
                  </Route>
                </Switch>
              </div>
            )}
      </div>
    </>
  );
}

export default App;
