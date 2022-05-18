import React ,{useEffect} from 'react'
import style from './About.module.css'
import teamimg from '../../img/chef2.jpeg'
import Menu from '../Menu/Menu'
import WOW from 'wowjs';
function About() {
  
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <section id="about">
    <div className='my-5 pb-5'>
    
    <h2 className={`wow zoomIn ${style.item}`}>About Us</h2>
    <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
          <div>
<img src={teamimg} className='img-fluid' alt="Chefimage" ></img></div>
    </div>
    <div className='offset-1 col-md-5'>
      <div className={style.text}>
<h2>Warm Meals is One Of The Best & Trusted Food Service.</h2>
 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div></div>
        </div>
    </div>
    
    </div>
    <Menu/>
    </section>
  )
}

export default About