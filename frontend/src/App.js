import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import ProjectDisplay from './components/ProjectDisplay'
import * as sessionActions from './store/session.js';


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(()=>{
    dispatch(sessionActions.restoreSessionUser()).then(()=>setIsLoaded(true))
  }, [dispatch])

  return (
    <>
      <Navigation isLoaded={isLoaded}/>
        {isLoaded && (
          <Switch>
            <Route path="/login">
              <LoginFormPage/>
            </Route>
            <Route path="/signup">
              <SignupFormPage/>
            </Route>
            <Route path="/" exact>
              <ProjectDisplay/>
            </Route>
            <Route>
              <h1>We can't find that page!</h1>
            </Route>
          </Switch>
         )}
    </>
  );
}

export default App;
