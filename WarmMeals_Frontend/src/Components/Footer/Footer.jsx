import React, { Component } from 'react';
import style from './Footer.module.css'

function Footer() {
  return (
    <>
    <footer className={style.footer}>
    <div className='container'>
    <div className='row'>
        <div className={style.footercol}>
    <h4>company</h4>
    <ul>
        <li><a href='#'>about us</a></li>
        <li><a href='#'>our services</a></li>
        <li><a href='#'>privacy policy</a></li>
        <li><a href='#'>affiliate program</a></li>
    </ul>
        </div>
        <div className={style.footercol}>
    <h4>get help</h4>
    <ul>
        <li><a href='#'>FAQ</a></li>
        <li><a href='#'>shiping</a></li>
        <li><a href='#'>returns</a></li>
        <li><a href='#'>order status</a></li>
        <li><a href='#'>payment options</a></li>
    </ul>
        </div>
        <div className={style.footercol}>
    <h4>online shop</h4>
    <ul>
        <li><a href='#'>watch</a></li>
        <li><a href='#'>Dishes</a></li>
        <li><a href='#'>Burger</a></li>
        <li><a href='#'>Pizza</a></li>
    </ul>
        </div>
        <div className={style.footercol}>
    <h4>follow us</h4>
    <div className={style.socialicons}>
        <a href='#'><i className='fab fa-facebook-f'></i></a>
        <a href='#'><i className='fab fa-twitter'></i></a>
        <a href='#'><i className='fab fa-instagram'></i></a>
        <a href='#'><i className='fab fa-linkedin-in'></i></a>
    </div>
        </div>
    </div>
    
    </div>
    
    </footer>
    <div className={style.smallfooter} >

            <div> <p> ©2022 Warm Meals,Made by Alaa Sayed</p></div>
   
    </div>
        </>
  )
}

export default Footer