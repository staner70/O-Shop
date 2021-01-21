import './App.css';
import "tailwindcss/tailwind.css";
import { Route, Redirect, Switch } from 'react-router-dom';
import  LoginForm from './containers/LoginForm';
import Home from './components/Home';

function App(logged) {
  return (
    <div className="App bg-bgback">
      <Switch>
      <Route exact path= '/'>
      { localStorage.getItem('logged')? <Redirect from='/' to="/pos"/> : <LoginForm />}
      </Route>
      <Route exact path='/pos'>
      {logged && <Home /> }
      </Route>
      </Switch>
      
    </div>
  );
};


export default App;
