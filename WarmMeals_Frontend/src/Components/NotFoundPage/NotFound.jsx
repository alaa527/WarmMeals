import React,{useEffect}from 'react'
import WOW from 'wowjs';
import style from './NotFound.module.css'
import Notfound from'../../img/NotFound.PNG'
function NotFound() {
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
  return (
    <div>
         <h2 className={`wow zoomIn ${style.item}`}>Page Not Found</h2>
         <div  className='my-5 d-flex justify-content-center'><img height="450px" width="450px" className='img-fluid' src={Notfound}></img> </div>
    </div>
  )
}

export default NotFound