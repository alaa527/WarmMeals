import React,{useEffect} from 'react'
import style from './Contact.module.css'
import WOW from 'wowjs';
function Contact() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <section className='my-5' id="contact">
 <h2 className={`wow zoomIn ${style.item}`}>Contact Us</h2>
<div className='container'>
  <div className='row'>
    <div className='col-md-5'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60389552709!2d31.32850511449987!3d30.059618470287788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1652129956875!5m2!1sar!2seg" height="500px" ></iframe>
</div>
        <div className="offset-1 col-md-5">

<form action="action_page.php">
<label >First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    <label >Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label >Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label className='my-3'>Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." height="200px"></textarea>

    <input type="submit" value="Submit"/>

</form>


        </div>
        </div></div>
     
    </section>
  )
}

export default Contact