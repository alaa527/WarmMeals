import axios from 'axios'
import React, { useState} from 'react'
import { useNavigate  } from "react-router-dom";
import style from './Login.module.css'

function Register() {

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [role, setRole]=useState('')
 const navigate  = useNavigate ();
  const Register = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8020/register', {
       
            email: email,
            password: password,
            role: role
        });
        navigate("/Login");
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
    <form className={style.formcss} onSubmit={Register} >
 
   <h4>Register</h4>
   <div className="form-group">
     <label >Email address<span>*</span></label>
     <input type="email" className="form-control"  id="email"  placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
   </div>
   <div className="form-group">
     <label >Password<span>*</span></label>
     <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
   </div>

   <div className="form-check">
  <input className="form-check-input" type="radio" name="useapp"  id="flexRadioDefault1" value="admin" onChange={(e) => setRole(e.target.value)} />
  <label className="form-check-label" >
   Admin
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="useapp" id="flexRadioDefault2" value="user"  onChange={(e) => setRole(e.target.value)} />
  <label className="form-check-label">
  User
  </label>
</div>
   <button type="submit" className="btn btn-block mt-2">Register</button>
   <p>You have an account? <a href='/Login'>Log In</a></p>
 </form>
 </div>
       </>
  )
}

export default Register
