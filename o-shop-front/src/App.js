import './App.css';
import "tailwindcss/tailwind.css";
import { Route } from 'react-router-dom'
import  LoginForm from './containers/LoginForm'
import ShopArticles from './components/ShopArticles';
import Home from './components/Home';


function App() {
  return (
    <div className="App bg-bgback">
      <Route exact path= '/'>
        <LoginForm />
      </Route>
      <Route exact path='/pos'>
        <ShopArticles />
      </Route>
      <Route exact path= '/home'>
        <Home />
      </Route>
    </div>
  );
};


export default App;
