import React from 'react'
import aboutone from '../Assets/about1.jpg'
import abouttwo from '../Assets/blog2.jpg'


function About() {
  return (
<>

    {/* <div className='about-page'>

    <div className='about-top'>



    </div>
    <div className='about-bottom'>

</div>

<div className='about-b1'>
    <img src={aboutone}/>


    </div>
    <div className='about-b2'>
    <img src={abouttwo}/>


    </div>

    <div className='about-b3'>


   <h1 className='about-txt'> About Us</h1>
<p>
An online store where we celebrate the unique culture and heritage of tribal communities from around the world. Our carefully curated collection includes artisanal products that are handmade by skilled craftspeople using traditional techniques and natural materials. From Botanical remedies and beauty products to home decor and apparel, we offer a diverse range of items that are infused with the spirit and essence of tribal artistry

</p>
<button className='about-more'>Read More</button>


    </div>


    </div> */}



    <div className='abt-div'>
    <div className='abt-left'>


   <h4 className='abt-heading'>About Us</h4>
<strong>   <h1 className='abt-heading1'>Comapny Name</h1></strong>
   <br/>
   <p>
   An online store where we celebrate the unique culture and heritage of tribal communities from around the world. Our carefully curated collection includes artisanal products that are handmade by skilled craftspeople using traditional techniques and natural materials. From Botanical remedies and beauty products to home decor and apparel, we offer a diverse range of items that are infused with the spirit and essence of tribal artistry
   </p>
   <button className='about-more'>Read More</button>


    </div>
    <div className='abt-right'>
<div className='borders'>

</div>
<div className='abt-img'>
    <img src={abouttwo}/>
</div>
    </div>

    </div>
    
</>
  )
}

export default About