
import './App.css';
import BannerSection from './components/BannerSection';
import BannerSlider from './components/BannerSlider';
import Cards from './components/Cards';
import Footer from './components/Footer';
import GrabDeal from './components/GrabDeal';
import Hero from './components/Hero';
import OurCollection from './components/OurCollection';
import Review from './components/Review';
import SearchBar from './components/SearchBar';
import Slider from './components/Slider';
import Tabs from './components/Tabs';

function App() {
  return (
  <>
<Hero/>
<SearchBar/>
<Slider/>
<div className='container'>
<Tabs/>
<Cards/>
</div>
<div className='banner'>
<BannerSection/>
<BannerSlider/>
</div>
<OurCollection/>
<GrabDeal/>
<Review/>
<Footer/>
  </>
  );
}

export default App;
