
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

import Login from './components/Login';

import Singup from './components/Singup';

import UserProfile from './components/UserProfile';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
  <>
 <Router>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
       
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Singup/>}/>
        <Route path="/userprofile" element={<UserProfile/>}/>
        <Route path="/productdetails" element={<ProductDetails/>}/>



 
      </Routes>
      
    </Router>





  </>
  );
}

export default App;
