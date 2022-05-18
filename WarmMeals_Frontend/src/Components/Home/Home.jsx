import React, { Component ,useEffect} from 'react'
import About from '../About/About'
import stylee from './Home.module.css'
import WOW from 'wowjs';
function Home() {

  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  
  return (
    <>   

    <header id="header">
<div className='container'>
  <div className='row'>
    <div className="col-md-6 wow slideInLeft " data-wow-duration="2s">
        <h2 >Food Made With Love Tastes Better.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cum quidem illo corrupti laboriosam asperiores quae? Reiciendis reprehenderit iure accusantium.</p>
        <button >Order now</button>
        <button>Learn more</button>
    </div>   
    <div className="col-md-6 " >
    </div> 
    </div>
    </div>
</header>
<section className={stylee.numbers}>
<div className='container'>
<div className='row'>
<div className='col-md-3'>
<h2>1287+</h2>
<h6>SAVING</h6>
</div>
<div className='col-md-3'>
<h2>5786+</h2>
<h6>PHOTOS</h6>
</div>
<div className='col-md-3'>
<h2>1440+</h2>
<h6>ROCKETS</h6>
</div>
<div className='col-md-3'>
<h2>7110+</h2>
<h6>GLOBES</h6>
</div>
</div>
</div>
 </section>

 <About/>
    </>
  )
}

export default Home