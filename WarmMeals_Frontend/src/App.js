import React, { Component,useState } from 'react'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import MealDetail from './Components/MealDetail/MealDetail'
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import Cart from './Components/Cart/Cart'
 import Question from './Components/Question/Question'
import {  Routes, Route} from 'react-router-dom'
import Register from'./Components/Login/Register'
import Policy from './Components/Policy/Policy'
import Backtotopbutton from './Components/BackToTop/Backtotopbutton'
import NotFound from './Components/NotFoundPage/NotFound'

function App() {
  // cartItem=cart   , this.state.cart=cart ,this.setState({ count: this.state.count + 1 })=setCount(count + 1)
  const [cart, setcart]=useState([])
 const addItem=(item)=>{
   let exist=cart.find((elm)=>elm._id===item._id)
   if(exist){
    let C=cart.map((elm)=>elm._id===item._id?{...exist,qty:exist.qty+1}:elm)
    setcart(C)
   }
   else{
    setcart([...cart,{...item,qty:1}])
    cart.push(item);
   }

   }

  const removeItem=(item)=>{
    let exist=cart.find((elm)=>elm._id===item._id)
    if(exist.qty>1){
      let C=cart.map((elm)=>elm._id===item._id?{...exist,qty:exist.qty-1}:elm)
      setcart(C) 
    }
   }
   const removeProduct=(item)=>{
   let c= cart.filter((elm)=>elm._id!==item._id)
   setcart(c) 
   }

   let totalQTY=cart.reduce((x,y)=>x+y.qty,0)
   let totalPrice=cart.reduce((x,y)=>x+y.qty*y.price,0)
  return (

    <>
    <Navbar totalQTY={totalQTY}/>
   
    <Routes >
    <Route exact path="/" element={<Home/>} />
    {/* <Route exact path="/Menu" element={<Menu/>} /> */}
    <Route exact path="/Home" element={<Home/>} />
    <Route exact path="/Login" element={<Login/>} />
    <Route exact path="/Register" element={<Register/>} />
    <Route exact path="/Question" element={<Question/>}/>
    <Route exact path="/Policy" element={<Policy/>}/>
    <Route  exact path="/getMealById/:id" element={<MealDetail addItem={addItem}/>}/>
    <Route  exact path="/Cart" element={<Cart totalPrice={totalPrice} removeProduct={removeProduct} removeItem={removeItem} addItem={addItem} cart={cart}/>}/>
    <Route exact path="*" element={<NotFound/>}/>
    </Routes>
    <Backtotopbutton/>

    <Footer/>
    
    
  </>
  )
}

export default App