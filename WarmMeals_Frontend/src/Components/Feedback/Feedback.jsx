import React ,{useEffect}from 'react'
import Contact from'../Contactus/Contact'
import style from './Feedback.module.css'
import WOW from 'wowjs';
import SwipperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import customer1 from "../../img/customer1.jpg"
import customer2 from "../../img/customer2.jpg"
import customer3 from "../../img/customer3.jpg"
import customer4 from "../../img/customer4.jpg"
import customer5 from "../../img/customer5.jpg"
SwipperCore.use([ Navigation, Pagination, Scrollbar, A11y])
function Feedback() {
  
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  
  return (
      <div className='my-5'>
     <h2 className={`wow zoomIn ${style.item}`}> Customer's Feedback</h2>
<div className='container'>
    <Swiper
     breakpoints={{
       
        300: {
          width: 300,
          slidesPerView: 1,
        },
      
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
    className='py-4'
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide> <div className={style.box}>
<img src={customer1} alt="Jane" className='img-fluid'/>
<h3>John Deo</h3>
<div className={style.stars}>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='far fa-star'></i>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquid modi quos dolore cupiditate vitae!</p>
</div></SwiperSlide>
<SwiperSlide> <div className={style.box}>
<img src={customer2} alt="Jane" className='img-fluid'/>
<h3>Jane Doe </h3>
<div className={style.stars}>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='far fa-star'></i>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquid modi quos dolore cupiditate vitae!</p>
</div></SwiperSlide>
<SwiperSlide> <div className={style.box}>
<img src={customer3} alt="Jane" className='img-fluid'/>
<h3>Mike Ross</h3>
<div className={style.stars}>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='far fa-star'></i>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquid modi quos dolore cupiditate vitae!</p>
</div></SwiperSlide>
<SwiperSlide> <div className={style.box}>
<img src={customer4} alt="Jane" className='img-fluid'/>
<h3>Gomana</h3>
<div className={style.stars}>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='far fa-star'></i>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquid modi quos dolore cupiditate vitae!</p>
</div></SwiperSlide>
<SwiperSlide> <div className={style.box}>
<img src={customer5} alt="Jane" className='img-fluid'/>
<h3>Hany Moaz</h3>
<div className={style.stars}>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='fas fa-star'></i>
    <i className='far fa-star'></i>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, aliquid modi quos dolore cupiditate vitae!</p>
</div></SwiperSlide>
<br></br>
  </Swiper>
  <Contact/></div>



  </div>
  )
      
}

export default Feedback