import './App.css';
import "tailwindcss/tailwind.css";
import { Route } from 'react-router-dom'
import  LoginForm from './components/LoginForm'

import Header from './components/Header';
import ShopArticles from './components/ShopArticles';

function App() {
  return (
    <div className="App bg-bgback">
      <Route exact path= '/'>
        <LoginForm />
      </Route>
      <Route exact path='/pos'>
      < Header />
      <div className="flex">
        <div className="flex flex-col xl:w-3/5 lg:w-full md:w-full sm:w-full">
          <div className="bg-red-600">Menu
       </div>
          <div className="bg-white">
            <ShopArticles />
          </div>
        </div>
        <div className="bg-yellow-600 xl:w-2/5 xl:visible	lg:invisible md:invisible sm:invisible">2</div>
      </div>
      </Route>
    </div>
  );
};


export default App;
