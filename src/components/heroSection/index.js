import React from 'react'
import './heroSectionStyle.css'
import Button from 'shared/button'
import bgImage from 'assets/hero-section-bg.jpg';
const HeroSection = () => {
  return (
    <div className="hero_section_container"
    style={{
        backgroundImage: `url(${bgImage})`,
    }}>
    <div className='hero_section_content'>
        <p>Finding the perfect home has never been this easy!</p>
        <span>Eliminate stressful house searches. We link you with the Lagos's finest and most affordable residences.<strong>Zero agent fees, middle man payments & hassles</strong></span>
       <div className='btn_container'>
        {/* This inline style is use to set the button to the same size */}
       <Button style={{
         width:"30%"
       }} btnName={"Download our app"} />
       <Button style={{
         width:"30%"
       }} outline btnName={"Learn more"} />
       </div>
       
    </div>
    </div>
  )
}

export default HeroSection
