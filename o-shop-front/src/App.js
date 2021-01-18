import './App.css';
import "tailwindcss/tailwind.css";

import Header from './components/Header';
import ShopArticles from './components/ShopArticles';

function App() {
  return (
    <div className="App">
     < Header />
     <div className="grid lg:grid-cols-1 xl:grid-cols-2 md:grid-cols-1 ">
       <div className="bg-red-600 auto-cols-auto	">Menu 
       <div className="bg-white">
         <ShopArticles />
       </div>
       </div>
       <div className="bg-yellow-600 auto-cols-min	">2</div>
       
     </div>
    </div>
  );
}

export default App;
