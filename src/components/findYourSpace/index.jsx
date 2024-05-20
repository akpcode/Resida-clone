import React from 'react';
import './findYourSpace.css';
import space from 'assets/fypimg.png';
import Button from 'shared/button';

const FindYourSpace = () => {
  return (
    <div className='fyp_container flex'>
      <section className='fyp_image_sec'>
        <img src={space} alt="Find Your Space Background" className='image' />
      </section>
      <section className='fyp_text_sec'>
        <div>
          <p>Your dream home is only a few clicks away</p>
        </div>
        <div>
          <span>- Find your space now</span>
        </div>
        <div className='fyp_button'>
          <Button 
            style={{
                width: "100%",
                fontSize:"10px",
                color:'#1b2056',
                fontWeight: "bold",
                borderRadius: '10px',
                padding: "12px 34px",
                backgroundColor: '#fff',              
            }} 
            btnName="Download app"
          />
        </div>
      </section>
    </div>
  );
};

export default FindYourSpace;
