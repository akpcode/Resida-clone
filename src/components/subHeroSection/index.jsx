import React from 'react'
import "./subHeroSec.css"
import Button from 'shared/button';
import { FaArrowRightLong } from "react-icons/fa6";

const SubHeroSection = () => {
  return (
    <section className='sub_hero_section_container'>
        <div className='sub_hero_text'><h1>Resida nullifies the hassles of agents</h1>
        <p>Save properties, create alerts and keep track of the enquires you send to agents.</p>
        </div>
        <div className='sub_hero_cta'>
            <Button 
            style={{
                backgroundColor: '#dba94d',
                color: '#1f4b43',
                padding: "7px 12px",
                width: "256px"

            }}
            btnName={"Download our app"} 
            rightIcon={<FaArrowRightLong size={22}/>
            }
            />
        </div>
      
    </section>
  )
}

export default SubHeroSection
