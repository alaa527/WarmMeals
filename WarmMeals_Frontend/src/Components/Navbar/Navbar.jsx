import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo.png'
import styles from './Navbar.module.css'
import { HashLink } from 'react-router-hash-link';
function Navbar(props) {
  return (
    <>
    <nav className="navbar  navbar-expand-lg navbar-light bg-light sticky-top ">
      <div className="container-fluid">
       
        <Link className="navbar-brand " to="/"> <img src={logo} className={styles.navlogo}></img>Warm Meals</Link>
          <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarSupportedContent">                
            <ul className="navbar-nav ml-auto ">
                <li className="nav-item ">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item dropdown">
                    <HashLink smooth className="nav-link dropdown-toggle" to="#about" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     About Us
                    </HashLink>
                    <div className="dropdown-menu cust-drop"  aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/Question">Common Questions</a>
                      <a className="dropdown-item" href="/Policy">Policy & Terms</a>
                    
                    </div>
                </li>
                <li className="nav-item">
                  <HashLink smooth  className="nav-link" to="#menu">Menu</HashLink>
                </li>
                <li className="nav-item">
                  <HashLink smooth className="nav-link" to="#team">Team</HashLink>
                </li>
          
                 <li className="nav-item">
                  <HashLink smooth className="nav-link" to="#contact">Contact Us</HashLink>
                </li>
          
          
                <li className="nav-item">
                    <Link to="/Login" className="nav-link "><i className="far fa-user fa-fw"></i></Link>
              
                </li>
    
                <li className="nav-item position-relative">
                  <Link className="nav-link" to="/Cart">
                    
                      <i className="fas fa-shopping-cart"></i>

                      <span className={` badge ${styles.cartBadge}`}>{props.totalQTY}</span>                      
                  </Link>
                </li>
                                                    
              </ul>
          </div>
      </div>
    </nav>
  </>
  )}

export default Navbar