import React,{useEffect} from 'react'
import stepimg1 from '../../img/Team2.jpg'
import stepimg2 from '../../img/Team4.jpg'
import stepimg3 from '../../img/Team5.jpg'
import stepimg4 from '../../img/Team6.jpg'
import Gallery from '../Gallery/Gallery';
import style from './Chefs.module.css'
import WOW from 'wowjs';
function Chefs() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
      <section id="team">
      <div className={style.section}>
      <h2 className={`wow zoomIn ${style.item}`}>Our Special Chefs</h2>
      <div className='container my-5'>
    <div className='row'>
    <div className='col-md-3'>
    <div className={style.box}>
    <img src={stepimg1}  className="img-fluid"></img>   
    <h3>Mike Griffin</h3> 
    </div>
    </div>
         
<div className='col-md-3'>
<div className={style.box}>
<img src={stepimg2} className="img-fluid"></img>   
<h3>Andrew Simon</h3> 
</div>    
</div>

<div className='col-md-3'>
<div className={style.box}>
<img src={stepimg3}  className="img-fluid"></img>   
<h3>Mark Otto</h3> 
</div>
</div>

<div className='col-md-3'>
<div className={style.box}>
  <img src={stepimg4}  className="img-fluid"></img>   
  <h3>Tom Hardy</h3> 
  </div>
  </div>
          </div>    
</div>
 
   

  </div>
    <Gallery/>
    </section>
  )
}

export default Chefs