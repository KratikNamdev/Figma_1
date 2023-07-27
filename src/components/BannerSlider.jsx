import React from 'react'
import slid1 from '../Assets/Rectangle 16.png'
import svg from '../Assets/SVG.png'
import shop from '../Assets/shop.png'


function BannerSlider() {
  return (
   <>

   <div className='marquee-box'>
   <div className="scrolling-container">
      <div className="scrolling-text">
       
      <div className='marquee-slider'>
    
      </div>
      <div className='marquee-slider marquee-slider1'>
   
      </div>



        {/* <img className='marquee-img' src= {slid2}/>
        <img className='marquee-img' src= {slid1}/>
        <img className='marquee-img' src= {slid2}/> */}

      </div>
    </div>
   </div>

   <button className='explore'>Explore Our Collection</button>
   <div className='shop-marquee'>
  
       {/* <h1> Shop <img src={svg} className='svg-shop'/></h1> */}
       <img src={shop}/>
      </div>

   </>
  )
}

export default BannerSlider