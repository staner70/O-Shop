import './App.css';
import "tailwindcss/tailwind.css";
import { Route, Redirect, Switch } from 'react-router-dom';
import  LoginForm from './containers/LoginForm';
import Home from './components/Home';

function App(props) {
  console.log(props);
  return (
    <div className="App bg-bgback">
      <Switch>
        <Route exact path= '/'>
          <LoginForm />
        { props.logged ? <Redirect from='/' to="/pos"/> : <LoginForm />}
        </Route>
        <Route exact path='/pos'>
        {props.logged && <Home /> }
        </Route>
        <Route exact path= '/home'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};


export default App;
