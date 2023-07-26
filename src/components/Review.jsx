import React from 'react'
import profile1 from '../Assets/Frame 61 (2).png'
import profile2 from '../Assets/Frame 61 (3).png'
import profile3 from '../Assets/Frame 61 (4).png'


function Review() {
  return (
    <div className='review'>

        <h1 style={{fontWeight:800}}>Our Customer Review</h1>
        <div className='reviewcard'>
        <div className='re-card'>
        <div className='review-top'>
        <div className='review-img'>
            <img src={profile1} />
            
        </div>
        <p>Chaitanya Goyal</p>

        </div>
        <div className='msgs'>
        <p>
        I just got my first order and I have one word WOW!!!! Love, Love, Love these cloths!!
        </p>

        </div>
       

        </div>
        <div className='re-card'>
        <div className='review-top'>
        <div className='review-img'>
            <img src={profile2} />
            
        </div>
        <p>Chaitanya Goyal</p>

        </div>
        <div className='msgs'>
        <p>
        I just got my first order and I have one word WOW!!!! Love, Love, Love these cloths!!
        </p>

        </div>
       

        </div>
        <div className='re-card'>
        <div className='review-top'>
        <div className='review-img'>
            <img src={profile3} />
            
        </div>
        <p>Chaitanya Goyal</p>

        </div>
        <div className='msgs'>
        <p>
        I just got my first order and I have one word WOW!!!! Love, Love, Love these cloths!!
        </p>

        </div>
       

        </div>
        
         </div>
         
    </div>
  )
}

export default Review