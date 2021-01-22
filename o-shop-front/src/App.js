import './App.css';
import "tailwindcss/tailwind.css";
import { Route, Redirect, Switch } from 'react-router-dom';
import  LoginForm from './containers/LoginForm';
import Home from './components/Home';
import AccessForbidden from './components/AccessForbidden';

function App(props) {
  console.log(props);
  return (
    <div className="App bg-bgback">
      <Switch>
        <Route exact path= '/'>
          <LoginForm />
        </Route>
        <Route exact path= '/home'>
          <Home />
        </Route>
        <Route exact path= '/accessforbidden'>
          <AccessForbidden />
        </Route>
      </Switch>
    </div>
  );
};


export default App;
