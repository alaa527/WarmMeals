import React,{ useState,useEffect}  from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios'
import WOW from 'wowjs';
import style from './MealDetail.module.css'
import { Link } from "react-router-dom";
function MealDetail({addItem}) {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
    let {id}  = useParams();
    const [Meal, setMeal]=useState([])
    useEffect(async()=>{
   
     await axios.get(`http://localhost:8020/getMealById/${id}`)
     .then(res=>{
    
        setMeal(res.data.Mealdata)
      })
      .catch(err=>{
        console.log(err)
      })
    },[])

  return (
      <div >
      <h2 className={`wow zoomIn ${style.item}`}>Meal Detail</h2>
      
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-5'>
       <img  height='400px' className='w-100' src={Meal.img}></img>
          </div>
          <div className='col-md-5 offset-1'>
            <div className={style.detailStyle}>
           <h3>{Meal.name}</h3>
           <p>{Meal.description}</p>
           <p>Price: {Meal.price} LE</p>
           <button className='btn w-70' onClick={() => {
          addItem(Meal);
            }} ><Link to={'#'}>Add To Cart</Link></button>
          </div>
        </div></div>

      </div>
   </div>
  )
}
export default MealDetail

