import React from 'react'
import './fProperties.css'
import FeaturedCards from 'shared/FeaturedCard';
import img1 from "assets/img1.png";
import img2 from "assets/img2.png";
import img3 from "assets/img3.png";
import { FaHeart } from 'react-icons/fa6';


const FeaturedPropertie = () => {
  return (
    <div>
        <main className='main' >
        <section className='f_container'> 
            <h2>Featured Properties</h2>
            <p>Explore our curated selection of premier properties, meticulously chosen to suit every lifestyle and budget. From luxurious penthouses to cozy family homes, our featured listings showcase the best of Lagos living.</p>
        </section>
        <section className='featured_card_div'>
        <FeaturedCards
        title={"Lillian Pepple Estate"} 
        icons={<FaHeart color="#797b7c" size={14} />}
        image={img1}
        buttons={["Duplexex", "Bungalows", "Self-contains"]}
        price={"From NGN500,000/year"}
       />
         <FeaturedCards
        title={"Naanchin Homes"} 
        icons={<FaHeart color="#797b7c" size={14} />}
        image={img2}
        buttons={["3 Bedroom flats", "Bungalows", "Students Accomodation"]}
        price={"From NGN500,000/year"}
       />
         <FeaturedCards
        title={"Horeb Accomodations"} 
        icons={<FaHeart color="#797b7c" size={14} />}
        image={img3}
        buttons={["Mansions", "Bungalows", "Office Spaces"]}
        price={"From NGN2,500,000/year"}
       />
        </section>
        </main>
      
    </div>
  )
 
}


export default FeaturedPropertie;
