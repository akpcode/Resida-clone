import React from 'react';
import './appartment.css';
import lekki from '../../assets/lekki.svg';
import lekki2 from '../../assets/lekki2.svg';
import lekki3 from '../../assets/lekki3.svg';
import lekki4 from '../../assets/lekki4.svg';
import lekki5 from '../../assets/lekki5.svg'

function FindHomes () {
  return (
    <div className='appart_main_container'>
        <div className='appart_text_section'>
            <h2>Find homes in popular neighbourhooods</h2>
            <p>Apartments in Lekki, Obalende, Agege & Yaba</p>
        </div>
      <div className='appart_container'>
           <div className='lekki_container'>
            <img src={lekki} alt="first_house" className='lekki_img' />
            <button className='house_button'>
                <p>8 Properties</p>
                <h5 className='house_text'>Lekki</h5>
            </button>
           </div>
           <div className='agege_container'>
                <div className='agege_img_container'>
                    <img src={lekki2} alt="agg_img" className='agege_img' />
                    <button className='house_btn'>
                      
                    <p>2 Properties</p>
                    <h5 className='house_text'>Agege</h5>
            </button>
                </div>
                <div>
                    <img src={lekki4} alt="obalande" className='obalande_img' />
                    <button className='house_'>
                    <p>45 Properties</p>
                    <h5 className='house_text'>Obalende</h5>
                     </button>
                </div>
           </div>
           <div className='mainland_container'>
          
                <div className='mainland_img_container'>
                    <img src={lekki3} alt="agg_img" className='agege_img' />
                    <button className='house_b'>
                        <p>8 Properties</p>
                        <h5 className='house_text'>Lekki</h5>
            </button>
                </div>
                <div>
                    <img src={lekki5} alt="obalande" className='obalande_img' />
                    <button className='house_bt'>
                    <p>12 Properties</p>
                    <h5 className='house_text'>Yaba</h5>
                    </button>
           </div>
           </div>
      </div>
    </div>
  )
}

export default FindHomes
