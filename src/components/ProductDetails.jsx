import React from 'react'
import pro1 from '../Assets/product1.jpg'
function ProductDetails() {
  return (
    <>
        <div className='product-detalis'>

        <div className='products-imgs'>

        <div className='side-img'>
        <div className='img-blocks'>
        <img src={pro1}/>

        </div>
        <div className='img-blocks'>
        <img src={pro1}/>

        </div>
        <div className='img-blocks'>
        <img src={pro1}/>

        </div>

        </div>
        <div className='main-img'>
        <div>
            <img src={pro1}/>
        </div>

        </div>

        </div>
        <div className='products-info'>

       <h3 className='product-Title'>Suit</h3>
       <br/>
       <h5 className='product-name'>Blue suit</h5>
       <h1 className='product-prise'>RS.122</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloribus porro quis itaque incidunt nulla magnam, modi velit qui, voluptatum sint, quidem nostrum sunt eos quo numquam provident ipsa aut?</p>
       <p className='color'>COLOR</p>
       <div>
        <button className='color1'>White</button>
        <button className='color2'>Black</button>

       </div><br/>

       <p className='qty-title'>QUANTITY</p>

       <div className='qty-section'>
       <button className='min'>-</button><input className='qty-input'/><button className='plus'>+</button>
       </div><br></br>
       <button className='addtocart'>ADD TO CART</button><br></br>
       <p>Elixir: Spicy, Fresh, Woody Notes</p>
       <p>One that never ceases to challenge – Freedom is delightfully audacious with spicy florals blend and cardamom curated to exude the young you.</p>
      
       <ul>
       <strong>Ingredients</strong>
      
  <li>Alcohol Denat</li>
  <li>Parfum</li>
  <li>Aqua</li>
  <li>Ethylhexyl Methoxycinnamate</li>
  <li>Butyl Methoxydibenzoylmethane</li>
  <li>Ethylhexyl Salicylate</li>
  <li>Hexyl Cinnamal</li>
  <li>Limonene</li>
  <li>Linalool</li>
  <li>Citronellol</li>
  <li>Alcohol Denat</li>
  <li>Parfum</li>
  <li>Aqua</li>
  <li>Ethylhexyl Methoxycinnamate</li>
  <li>Butyl Methoxydibenzoylmethane</li>
  <li>Ethylhexyl Salicylate</li>
  <li>Hexyl Cinnamal</li>
  <li>Limonene</li>
  <li>Linalool</li>
  <li>Citronellol</li>

</ul>
Eau De Parfum | Natural Spray | Vaporisateur | 100 ml | 80% VOL | 3.4 FL.OZ
      

       <p className='text-danger'>NO RETURNS OR EXCHANGE WILL BE APPLICABLE ON THIS PRODUCT</p>
</div>

        </div>
    </>
  )
}

export default ProductDetails