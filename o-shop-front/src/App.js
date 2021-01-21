import './App.css';
import "tailwindcss/tailwind.css";
import { Route } from 'react-router-dom'
import  LoginForm from './containers/LoginForm'
import Home from './components/Home';


function App() {
  return (
    <div className="App bg-bgback">
      <Route exact path= '/'>
        <LoginForm />
      </Route>
      <Route exact path='/pos'>
      <Home />
      </Route>
    </div>
  );
};


export default App;
