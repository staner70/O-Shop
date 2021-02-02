import './App.css';
import "tailwindcss/tailwind.css";
import { Route, Redirect, Switch } from 'react-router-dom';
import  LoginForm from './containers/LoginForm';
import Home from './components/Home';
import Admin from './containers/Admin';
import AdminUser from './containers/AdminUser';
import AdminProducts from './containers/AdminProducts';
import AdminCategories from './containers/AdminCategory';
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
        <Route exact path= '/home/category/:id'>
          <Home />
        </Route>
        <Route exact path= '/admin'>
        <Admin />
        </Route>
        <Route exact path= '/admin/user'>
        <AdminUser />
        </Route>
        <Route exact path= '/admin/products'>
        <AdminProducts />
        </Route>
        <Route exact path= '/admin/categories'>
        <AdminCategories />
        </Route>
        <Route exact path= '/accessforbidden'>
          <AccessForbidden />
        </Route>
      </Switch>
    </div>
  );
};


export default App;
