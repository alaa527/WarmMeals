import React,{ useState,useEffect} from 'react'
import style from './Backtotopbutton.module.css'
function Backtotopbutton() {
    const [Backtotopbutton, setBacktotopbutton]=useState(false)
    useEffect(()=>{
window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
setBacktotopbutton(true);
    }
  else{
        setBacktotopbutton(false);
            }
})
    })
const scrollUp=()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
   });
}
  return (
    
    <div className='App'>
        {
          Backtotopbutton &&(
              <button  className={style.backtop} onClick={scrollUp}>&#8679;</button>
          )  
        }
    </div>
  )
}

export default Backtotopbutton