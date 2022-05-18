import React, { Component ,useState,useEffect} from 'react';
import axios from 'axios'
import style from './Menu.module.css'
import { Link } from "react-router-dom";
import Chefs from '../Chefs/Chefs';
import ReactPaginate from 'react-paginate';
import WOW from 'wowjs';
export const UserContext=React.createContext();

function Menu() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  const [Meals, setMeals]=useState([])

   useEffect(async()=>{
  
    await axios.get('http://localhost:8020/pagination?page=1&&size=8')
    .then(res=>{
     
       setMeals(res.data.data)
     })
     .catch(err=>{
       console.log(err)
     })
   },[])

   const fetchMeals=async(currentPage)=>{
   const res =await fetch(`http://localhost:8020/pagination?page=${currentPage}&&size=8`)
    const data= await res.json();
    Array.from(data.data)
   return data.data;
       }
  const handlePageClick=async(data)=>{

let currentPage=data.selected+1
const mealfromserver=await fetchMeals(currentPage)
setMeals(mealfromserver)
   }

  return (

    <div id='menu'> 

    <h2 className={`wow zoomIn ${style.item}`}>Cooked With All Love</h2>
    
    <div className='container mb-4'>
  
      <div className='row'>{Meals.map((Meal) => (
            <div className="col-md-3 py-3" key={Meal._id}>
            
          <div className={style.smallbox}>
            <img height='280px' className='w-100' src={Meal.img} />
            <div className={style.cartTitle}>
            <h4 className='my-4'>
          <Link to={`/getMealById/${Meal._id}`}>{Meal.name}</Link>
        </h4>
          
            <p>{Meal.price}LE</p>
         
            
            </div>
         
            <button className='btn w-70 '><Link to={`/getMealById/${Meal._id}`}>More Details</Link></button>
          </div>
        </div>
       
      ))}

         
      </div>
    </div>
    <ReactPaginate 
         previousLabel={'previous'}
         nextLabel={'next'}
         breakLabel={"..."}
					pageCount={5}
					marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={'page-item'}
          pageLinkClassName={`page-link ${style.pagination_style}`}
          previousClassName={'page-item'}
          previousLinkClassName={`page-link ${style.pagination_style}`}
       nextClassName={'page-item'}
         nextLinkClassName={`page-link ${style.pagination_style}`}
         breakClassName={'page-item'}
         breakLinkClassName={`page-link ${style.pagination_style}`}
         
		
				/>
    <Chefs/>
    
    </div>
  )
}

export default Menu
