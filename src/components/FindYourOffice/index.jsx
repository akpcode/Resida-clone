import React from 'react';
import "./findOffice.css"
import office from 'assets/office.svg';

function FindYourOffice () {
  return (
    <div className='main_container' >
      <div className='inner_container'>
            <div className='space_img_sec'>
                <img src={office} alt="find office" className='office_img' />
            </div>
            <div className='find_office_sec'> 
            <div className='office_info'>  
                <h2 className='title'>Need an office space?</h2> 
                <p className='subtitle'>Seeking office space in Lagos? Look no further! Our accommodations offer tailored solutions to meet your workspace needs, ensuring productivity and comfort in the heart of Lagos</p>
            </div>
            </div>
      </div>
    </div>       
           
   
  )
}

export default FindYourOffice;
