import './App.css';
import "tailwindcss/tailwind.css";
import { Route, Redirect, Switch } from 'react-router-dom';
import  LoginForm from './containers/LoginForm';
import Home from './components/Home';
import Admin from './components/Admin';
import AdminUser from './components/AdminUser';

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
        <Route exact path= '/admin'>
        <Admin />
        </Route>
        <Route exact path= '/admin/user'>
        <AdminUser />
        </Route>
      </Switch>
    </div>
  );
};


export default App;
