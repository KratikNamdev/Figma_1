
import './App.css';
import BannerSection from './components/BannerSection';
import BannerSlider from './components/BannerSlider';
import Cards from './components/Cards';
import Footer from './components/Footer';
import GrabDeal from './components/GrabDeal';
import Hero from './components/Hero';
import OurCollection from './components/OurCollection';
import Review from './components/Review';
import Slider from './components/Slider';
import Tabs from './components/Tabs';

function App() {
  return (
  <>
<Hero/>
<Slider/>
<Tabs/>
<Cards/>
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
