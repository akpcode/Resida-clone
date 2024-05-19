import React from 'react'
import './ourExperience.css'
import exp1 from "assets/exp1.jpg";
import exp2 from "assets/exp2.jpg";
import exp3 from "assets/exp3.jpg";
const OurExperience = () => {
  return (
    <div className='our_exp_container'>
        <section className='boxes_container flex'>
            <div className='overflow flex'>
            <div className='box1'>
                <img src={exp1} alt="info" className='image'/>    
            </div>
            <div className='box2'>
                <img src={exp2} alt="info"  className='image'/>
            </div>
            <div className='box3'>
                <img src={exp3} alt="info"className='image'/>
            </div>
            </div>
        </section>
        <section className='text flex'>
            {'Our Experience guarantees unmatched proficiency and excellence.'}
        </section>
    </div>
  )
}

export default OurExperience
