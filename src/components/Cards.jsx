import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import tshirt from '../Assets/espresso (1).png'
import tshirt2 from '../Assets/hazelnut latte (1).png'
import tshirt3 from '../Assets/unsplash_RFHFV7lVQBY (2).png'
import tshirt4 from '../Assets/hoodie.png'


function Cards() {
  return (
    <>
      <div className='products'>

 
<div className='pd-section'>
<div className='product-card'>
<div className='product-img'>
  <img src={tshirt} />
</div>
<div className='product-details'>
 <div className='product-title'>
 <h5>T Shirt Basic </h5> <h5>$30.00</h5>
 </div>
 

  <p>Oversize White</p>

</div>


</div>
<div className='product-card'>
<div className='product-img'>
  <img src={tshirt2} />
</div>
<div className='product-details'>
 <div className='product-title'>
 <h5>T Shirt Basic </h5> <h5>$30.00</h5>
 </div>
 

  <p>Oversize White</p>

</div>


</div>
</div>


<div className='pd-section'>
<div className='product-card'>
<div className='product-img'>
  <img src={tshirt3} />
</div>
<div className='product-details'>
 <div className='product-title'>
 <h5>T Shirt Basic </h5> <h5>$30.00</h5>
 </div>
 

  <p>Oversize White</p>

</div>


</div>
<div className='product-card'>
<div className='product-img'>
  <img src={tshirt4} />
</div>
<div className='product-details'>
 <div className='product-title'>
 <h5>T Shirt Basic </h5> <h5>$30.00</h5>
 </div>
 

  <p>Oversize White</p>

</div>


</div>
</div>



  </div>
  <div className='products'>

 
<div className='pd-section'>
<div className='product-card'>
<div className='product-img'>
  <img src={tshirt} />
</div>
<div className='product-details'>
 <div className='product-title'>
 <h5>T Shirt Basic </h5> <h5>$30.00</h5>
 </div>
 

  <p>Oversize White</p>

</div>


</div>
<div className='product-card'>
<div className='product-img'>
  <img src={tshirt2} />
</div>
<div className='product-details'>
 <div className='product-title'>
 <h5>T Shirt Basic </h5> <h5>$30.00</h5>
 </div>
 

  <p>Oversize White</p>

</div>


</div>
</div>


<div className='pd-section'>
<div className='product-card'>
<div className='product-img'>
  <img src={tshirt3} />
</div>
<div className='product-details'>
 <div className='product-title'>
 <h5>T Shirt Basic </h5> <h5>$30.00</h5>
 </div>
 

  <p>Oversize White</p>

</div>


</div>
<div className='product-card'>
<div className='product-img'>
  <img src={tshirt4} />
</div>
<div className='product-details'>
 <div className='product-title'>
 <h5>T Shirt Basic </h5> <h5>$30.00</h5>
 </div>
 

  <p>Oversize White</p>

</div>


</div>
</div>



  </div>


  
    </>
  )
}

export default Cards