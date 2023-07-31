import React from 'react'
import blog1 from '../Assets/blog1.png'
import blog2 from '../Assets/blog2.jpg'
import blog3 from '../Assets/blog3.png'


function Blogs() {
  return (
   <>
    <div className='blogs'>
    <div className='blog-imgs'>
    <h1>Our <br/>Top <br/>Blog</h1>
    <div className='blog-img-one'>
        <img src={blog1} />
    </div>
    <div className='blog-img-two'>
    <img src={blog2} />
    <img src={blog3} />

    </div>

    </div>

    <div className='blog-details'>
<div className='blog-card'>
<p className='latest-blog'>Latest</p>
<h5 className='blog-title'>Blog Title</h5>
<p> Curabitur vitae euismod odio, nec tempor turpis. Sed dictum dictum To lPhasellus at rhoncus lacus have to do.</p>
<a className='blog-read-more'>Read More</a>
</div>
<div className='blog-card'>
<p className='latest-blog'>Latest</p>
<h5 className='blog-title'>Blog Title</h5>
<p> Curabitur vitae euismod odio, nec tempor turpis. Sed dictum dictum To lPhasellus at rhoncus lacus have to do.</p>
<a className='blog-read-more'>Read More</a>
</div>
<div className='blog-card'>
<p className='latest-blog'>Latest</p>
<h5 className='blog-title'>Blog Title</h5>
<p> Curabitur vitae euismod odio, nec tempor turpis. Sed dictum dictum To lPhasellus at rhoncus lacus have to do.</p>
<a className='blog-read-more'>Read More</a>
</div>



</div>

    </div>
   </>
  )
}

export default Blogs