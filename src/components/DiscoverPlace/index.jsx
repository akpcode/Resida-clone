import React from 'react'
import './Dplace.css';
import Button from 'shared/button';
import { FaArrowRightLong } from 'react-icons/fa6';
// import place from 'assets/Place.svg';

const DiscoverPlace = () => {
  return (
    <div className='d_container'>
        <section className='d_place_text'>
            <div className='text_holder'>
               <h1>Discover a place you'll<br/>
                love to live</h1>
            </div>
            <div className='d_place_button'>
         <Button 
             style={{
                width: "100%",
                fontSize:"10px",
                color:'#1A1A1A',
                fontWeight: "bold",
                borderRadius: '10px',
                padding: "12px 34px",
                backgroundColor: '#dba94d',              
            }} 
            btnName="Download app" 
            rightIcon={<FaArrowRightLong size={22}/>}        
         />
            </div>
        </section>
     
    </div>
  )
}

export default DiscoverPlace;
