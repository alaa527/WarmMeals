import React,{useEffect} from 'react'
import style from './Policy.module.css'
import WOW from 'wowjs';
function Policy() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, [])
  return (
    <>
    <h2 className={`wow zoomIn ${style.item}`}>Policy & Terms</h2>
    <div className='container my-5 py-4'>
        <div className={style.Policyterms}>
        <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum suscipit quas aliquam, aspernatur numquam quo quia modi, autem reprehenderit, eveniet voluptas obcaecati placeat fugit necessitatibus iusto? Minima velit distinctio eos a, sit odit nihil ratione cum fuga vero rerum error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus perferendis sit quibusdam nihil voluptates molestias quod dicta tenetur eius dolorem animi alias consequuntur voluptatum illo veniam odio, sapiente dignissimos. 
      <br></br> <br></br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus perferendis sit quibusdam nihil voluptates molestias quod dicta tenetur eius dolorem animi alias consequuntur voluptatum illo veniam odio, sapiente dignissimos.
        </p>
    </div></div>
    </>
  )
}

export default Policy