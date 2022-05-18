import React,{useState,useEffect} from 'react'
import GalleryData from './GalleryData'
import style from './Gallery.module.css'
import Feedback from '../Feedback/Feedback'
import WOW from 'wowjs';
function Gallery() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  const [images,setImage]=useState(GalleryData)
  const allItem=()=>{
const finaldate=GalleryData.filter((value)=>{
  return value;
})
setImage(finaldate)
  }


  const onlyDishes=(categoryItem)=>{
    const finaldate=GalleryData.filter((value)=>{
      return value.tag==categoryItem;
    })
    setImage(finaldate)
      }


const onlyPizza=(categoryItem)=>{
    const finaldate=GalleryData.filter((value)=>{
    return value.tag==categoryItem;
    })
    setImage(finaldate)
    }
          
          
const onlyBurger=(categoryItem)=>{
   const finaldate=GalleryData.filter((value)=>{
   return value.tag==categoryItem;
    })
   setImage(finaldate)
    }

 const onlyDessert=(categoryItem)=>{
   const finaldate=GalleryData.filter((value)=>{
      return value.tag==categoryItem;
     })
   setImage(finaldate)
    }           
  return (
    <>
<h2 className={`wow zoomIn ${style.item}`}>Our Food Gallery</h2>

<div className='container'>
<div className='row'>
 <div className={style.links}>
<button className='btn' onClick={allItem}>All</button>
<button className='btn' onClick={()=>onlyDishes('Dishes')}>Dishes</button>
<button className='btn' onClick={()=>onlyPizza('Pizza')}>Pizza</button>
<button className='btn' onClick={()=>onlyBurger('Burger')}>Burger</button>
<button className='btn' onClick={()=>onlyDessert('Dessert')}>Dessert</button>
  </div>
  </div>
</div>

<div className='container'>
<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'> 
{
  images.map((value)=>{
    return (
      <div className='col-md-3 mt-3 mb-4'  key={value.id} >
        <div className={style.box}>
        <img src={value.imageName} className={`img-fluid h-100 w-100 ${style.imgshadow}`} alt="image"/>
         <div className={style.content}>
         <button >Order now</button>
         
         </div>
        </div>
       
        </div>

    );
  })
}
</div>
</div>
<Feedback/>

</>
  );

 
}

export default Gallery