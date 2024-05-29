import React from 'react';
import "./infocard.css";
import Button from 'shared/button';
import { FaArrowRightLong } from 'react-icons/fa6';

function InfoCard ({title, subtitle, body, image, imageStyle, imageHeight, button, infoStyle}) {
  return (
    <div className='info_container'>
      <div className='info_inner_container'>
        <div className={imageStyle}>
          <img src={image} alt="nji" className={imageHeight}/>
        </div>
        <div className='info_description'>
          <div className={infoStyle}>
            {/* {circle && (
              <div className='info_circle'>
                {
                  
                }
              </div>
            )} */}
            <h2 className='info_title'>{title}</h2>
            <h2 className='info_subtitle'>{subtitle}</h2>
            <p className='info_body'>{body}</p>
            {button && (
              <Button 
                style={{
                  backgroundColor: '#dba94d',
                  color: '#1f4b43',
                  padding: "7px 12px",
                  width: "256px"
                }}
                btnName="Download our app" 
                rightIcon={<FaArrowRightLong size={22}/>}
              />
            )}
          </div>         
        </div>
      </div>
    </div>
  





    // <div className='info_container'>
    //     <div className='info_inner_container'>
    //     <div className='info_image'>
    //         <img src={info_image} alt="nji" className='image'/>
    //     </div>
    //     <div className='info_description'>
    //         <div className='info'>
    //             <h2 className='info_title'>Resida is Not Just an App</h2>
    //             <h2 className='info_subtitle' >We are an ecosystem with you at the center</h2>
    //             <p className='info_body'>Resida aims to bridge the gap between potential tenants and 
    //             available properties. This app is not just a tool; it's a solution 
    //             for individuals and families who are navigating the challenging 
    //             terrain of apartment hunting in a new or familiar city.{" "}
    //             </p>
    //         </div>

    //     </div>
    //     </div>
    // </div>
       
       
   
  )
}

export default InfoCard;
