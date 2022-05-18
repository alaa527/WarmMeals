import React,{useEffect} from 'react'
import style from './Cart.module.css'
import cartimg from'../../img/cart.PNG'
import WOW from 'wowjs';
function Cart(props) {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <div className={style.cartstyle}>
       <h2 className='wow zoomIn'>Shopping Cart</h2>

       {props.cart.length===0?  <div  className=' d-flex justify-content-center'><img height="250px" width="250px" className='img-fluid' src={cartimg}></img>      </div>  :  <table className='col-sm-11'  width="1200" height="300">
     
      <thead>
        <tr>
  <th>Name</th>
  <th>Image</th>
  <th>Desc</th>
  <th>Price</th>
  <th>Quantity</th>
</tr>
      </thead>
      <tbody >

      {props.cart.map((value,index)=>{
        return(
    <tr key={value._id}>
  <td>{value.name}</td>
  <td width="150px"><img className='w-100' height='200px' src={value.img}></img></td>
  <td>{value.description}</td>
  <td>
{value.price} LE
  </td>
  <td width="200px"><button onClick={() => {
        props.addItem(value);
            }} className='btn'>+</button>
       <span className='px-2'>{value.qty}</span>
           <button onClick={() => {
        props.removeItem(value);
            }} className='btn '>-</button>
           <button onClick={() => {
        props.removeProduct(value);
            }} className='btn ml-2'><i className='fas fa-trash'></i></button>
           </td>
  </tr>
  
  )})}
  
      </tbody>
    </table>}  
  <span>TotalPrice: {props.totalPrice.toFixed(2)} LE </span>
  <button className='btn w-70 my-5 mx-4' >Buy Now</button>
 </div>
  )
}

export default Cart

