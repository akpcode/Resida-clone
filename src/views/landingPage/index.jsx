import FindYourSpace from 'components/findYourSpace';
import HeroSection from 'components/heroSection';
import InfoCard from 'components/infocard';
import OurExperience from 'components/ourExperience';
import SubHeroSection from 'components/subHeroSection';
import info_image from "../../assets/notj-image.png";
import guidemap from "../../assets/guide-map.jpg"
import React from 'react'
// import './landingPage.css'
import Header from 'shared/header';
import FeaturedPropertie from 'components/featuredProperties';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SubHeroSection />
      <InfoCard  
         title="Find your Space"
        subtitle="We are an ecosystem with you at the center"
        body="Resida aims to bridge the gap between potential tenants and 
             available properties. This app is not just a tool; it's a solution 
              for individuals and families who are navigating the challenging 
              terrain of apartment hunti ng in a new or familiar city."
        image={info_image}
        imageHeight={"image"}
        imageStyle={"info_image"}
        infoStyle={"info"}
        
        
      />
      <OurExperience />
      <FindYourSpace />
      <InfoCard  
       title="Comprehensive"
       subtitle="Neighborhood Guides"
       body="The 'Neighborhood Guides' in Resida are like your friendly local experts, giving you the inside scoop on the vibe, hotspots, and quirks of each area so you can find your perfect match effortlessly! 🏡✨"
        image={guidemap}
        imageHeight={"info_comp_height"}
        imageStyle={"info_comprehensive"}
        button={true}
        infoStyle={"info_guide"}
      />
    <FeaturedPropertie />
    </div>
  )
}

export default LandingPage;
