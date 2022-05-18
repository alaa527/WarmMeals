import React,{useState,useEffect} from 'react'
import style from './Question.module.css'
import teamimg from '../../img/Team3.jpg'
import WOW from 'wowjs';
function Question() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  const [Selected, setSelected]=useState(null)
const toggle=(i)=>{
if(Selected===i)
{
  return setSelected(null);
}
setSelected(i)
}

  return (
    <div className='my-5'>
    
    <h2 className={`wow zoomIn ${style.item}`}>Common Questions</h2>
    <div className='container '>
        <div className='row'>
        <div className='col-md-6'>
<img src={teamimg} className='img-fluid' alt="Chefimage"></img>
    </div>
    <div className='col-md-6'>
<div className={style.wrapper}> 
  <div className={style.accordion}>
{
  data.map((item,i)=>(
    <div className={style.items}>
      <div className={style.title} onClick={()=>toggle(i)}>
        <h5>{item.question}</h5>
        <span>{Selected===i?'-':'+'}</span>

      </div>
      <div className={Selected===i? style.show:style.content}>{item.answer}</div>
      </div>
  ))
}
  </div>
</div>
  </div>
    </div>
        </div>

    </div>
  )
}
const data=[
  {
    question:"How long is delivery time ?",
    answer:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, magni?"
  },
  {
    question:"What are the working days and hours ?",
    answer:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, magni?"
  },
  {
    question:"What payment methods can i use ?",
    answer:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, magni?"
  },
  {
    question:"How do I get promo code or discount code ?",
    answer:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, magni?"
  }
]
export default Question
