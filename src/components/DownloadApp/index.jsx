import React from 'react'
import './downloadApp.css';
import Button from 'shared/button';
import { IoLogoApple } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";
import mobile from "assets/mobile.svg"

function DownloadApp()  {
  return (
    <div className='down_container'>
      <div className='download_container'>
            <section className='info_sec_download'>
                <h1 className='download_title'>Download our App</h1>
                <p className='download_subtitle'>With intuitive search features and a curated selection of properties tailored to your preferences, finding your dream home has never been easier. Join thousands of satisfied users who have unlocked the key to their ideal living space with just a tap.</p>
                <div className='download_btn_container'>
          <Button 
               style={{
                    width: "223px",
                    height: "60px",
                    borderRadius: '12px',
                    backgroundColor: '#1f4b43', 
                    paddingRight: '1rem',
                    padding: '23px',

                    }} 
                    
                     leftIcon={<IoLogoApple size={40} style={{ borderRight: `2px solid grey`, paddingRight: '5px', marginRight: '2rem',marginLeft: '0px'}}/>}
                    btnName={
                        <>
                             <p className='apple'>Download on the</p> <br />
                             <h3>Apple Store</h3>
                        </>
                    }
                    />
           <Button 
                    style={{
                        width: "223px",
                        height: "60px",
                        borderRadius: '12px',
                        backgroundColor: '#1f4b43', 
                        paddingRight: '1rem',
                        padding: '23px',
                              
                    }} 
                    leftIcon={<FaGooglePlay size={40} style={{ borderRight: `2px solid grey`, paddingRight: '5px', marginRight: '2rem',marginLeft: '0px', paddingLeft: '-3px'}}/>}
                    btnName={
                        <>
                            <p className='google'>Get it on </p> <br />
                             <h3>Google Store</h3>
                        </>
                    }
                    />
                </div>
            </section>
            <section className='image_sec'>
                        <img src={mobile} alt="mobile" className='mobile_img' />
            </section>
      </div>
    </div>
  )
}

export default DownloadApp;
