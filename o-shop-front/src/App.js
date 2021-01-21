import './App.css';
import "tailwindcss/tailwind.css";
import { Route } from 'react-router-dom'
import  LoginForm from './containers/LoginForm'
import ShopArticles from './components/ShopArticles';


function App() {
  return (
    <div className="App bg-bgback">
      <Route exact path= '/'>
        <LoginForm />
      </Route>
      <Route exact path='/pos'>
        <ShopArticles />
      </Route>
    </div>
  );
};


export default App;
