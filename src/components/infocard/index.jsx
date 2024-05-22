import React from 'react'
import "./infocard.css";
import info_image from "../../assets/notj-image.png";
const InfoCard = () => {
  return (
    <div className='info_container'>
        <div className='info_inner_container'>
        <div className='info_image'>
            <img src={info_image} alt="nji" className='image'/>
        </div>
        <div className='info_description'>
            <div className='info'>
                <h2 className='info_title'>Resida is Not Just an App</h2>
                <h2 className='info_subtitle' >We are an ecosystem with you at the center</h2>
                <p className='info_body'>Resida aims to bridge the gap between potential tenants and 
                available properties. This app is not just a tool; it's a solution 
                for individuals and families who are navigating the challenging 
                terrain of apartment hunting in a new or familiar city.{" "}
                </p>
            </div>

        </div>
        </div>
       
       
    </div>
  )
}

export default InfoCard;
