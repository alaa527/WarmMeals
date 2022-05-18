import React, { Component ,useState } from 'react'
import axios from 'axios'
import style from './Login.module.css'
import { useNavigate  } from "react-router-dom";

function Login() {
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const navigate  = useNavigate ();
  const Auth = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8020/login', {
          email: email,
          password: password
        }).then(res=>{
      
             console.log(res.data)
           })
       
        navigate("/");
    } catch (error) {
      if (error.response) {
        console.log(error)
          alert(JSON.stringify(error.response.data))
      }
  }
}
  return (
    <>
   <div className='my-5'>
    <form className={style.formcss} onSubmit={Auth}>
 
   <h4>Login</h4>
   <div className="form-group">
     <label >Email address<span>*</span></label>
     <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
   </div>
   <div className="form-group">
     <label >Password<span>*</span></label>
     <input type="password" className="form-control"  id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
   </div>
   <div className="form-group form-check">
     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
     <label className="form-check-label">Check me out</label>
   </div>
   <button type="submit" className="btn btn-block">Log in</button>
   <p>Don’t have an account? <a href='/Register'> Sign Up</a></p>
 </form>
 </div>
       </>
  )
}

export default Login
