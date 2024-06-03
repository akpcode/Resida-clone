import React from 'react';
import "./infocard.css";
import Button from 'shared/button';
import { FaArrowRightLong } from 'react-icons/fa6';
import circ1 from "../../assets/circ1.svg";
import circ2 from "../../assets/circ2.svg";
import circ3 from "../../assets/circ3.svg";
import circ4 from "../../assets/circ4.svg";
import CircleImage from './components/CircleImage';

function InfoCard ({
  title,
   subtitle,
    body,
     image,
      imageStyle,
       imageHeight,
        button,
         infoStyle,
          circle,
        circleStyletitle,
        circleStylesub,
        reverse
      }) {
  return (
    <div className='info_container'>
      <div className='info_inner_container'>
        {reverse ? (
        <>
         <div className='info_description'>
          <div className={infoStyle}>
            {/* setting props to take in the image and giving it conditioning for rendering */}
            {circle && (
              <div className='info_circle'>
                  {/* <div className='info_circle_img'>
                    <img src={circ1} alt='' className='circle_img' />
                  </div> */}
                  <CircleImage image={circ1}/>
                  <CircleImage image={circ2} style={{marginLeft: '-30px'}}/>
                  <CircleImage image={circ3} style={{zIindex:30, marginLeft: '-30px'}}/>
                  <CircleImage image={circ4} style={{marginLeft: '-30px', zIindex:40}}/>
              </div>
            )}
            {circleStyletitle ? (
                <h2 className='info_title' style={{fontWeight:'600'}}>{title}</h2> 
                ):(
                <h2 className='info_title'>{title}</h2>
            )}
            {circleStylesub ? (
                 <h2 className={circleStylesub} 
                  >{subtitle}
               </h2> ) : (
              <h2 className='info_subtitle'>
                {subtitle}
          </h2>
            )}

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
        <div className={imageStyle}>
          <img src={image} alt="nji" className={imageHeight}/>
        </div>
        </>) : (
        <>
          <div className={imageStyle}>
          <img src={image} alt="nji" className={imageHeight}/>
        </div>
        <div className='info_description'>
          <div className={infoStyle}>
            {/* setting props to take in the image and giving it conditioning for rendering */}
            {circle && (
              <div className='info_circle'>
                  {/* <div className='info_circle_img'>
                    <img src={circ1} alt='' className='circle_img' />
                  </div> */}
                  <CircleImage image={circ1}/>
                  <CircleImage image={circ2} style={{marginLeft: '-30px'}}/>
                  <CircleImage image={circ3} style={{zIindex:30, marginLeft: '-30px'}}/>
                  <CircleImage image={circ4} style={{marginLeft: '-30px', zIindex:40}}/>
              </div>
            )}
            {circleStyletitle ? (
                <h2 className='info_title' style={{fontWeight:'600'}}>{title}</h2> 
                ):(
                <h2 className='info_title'>{title}</h2>
            )}
            {circleStylesub ? (
                 <h2 className='info_subtitle' 
                  style={{fontWeight: 300,
                  textAlign:'left'
                   }}>{subtitle}
               </h2> ) : (
              <h2 className='info_subtitle'>
                {subtitle}
          </h2>
            )}

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
        </>

        )}
        
        
      </div>
    </div>
  
       
       
   
  )
}

export default InfoCard;
