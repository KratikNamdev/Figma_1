
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

import Login from './components/Login';

import Singup from './components/Singup';

import UserProfile from './components/UserProfile';
import ProductDetails from './components/ProductDetails';
import ProductCrads from './components/ProductCrads';
import Blogs from './Pages/Blogs';
import BlogDetail from './Pages/BlogDetail';
import Products from './Pages/Products';
import About from './Pages/About';

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
        <Route path="/productcards" element={<ProductCrads/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogsdetail" element={<BlogDetail/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>}/>








 
      </Routes>
      
    </Router>





  </>
  );
}

export default App;
