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
import DiscoverPlace from 'components/DiscoverPlace';
import grpG from "../../assets/grpG.svg"
import FindYourOffice from 'components/FindYourOffice';
const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SubHeroSection />
      <InfoCard  
         title="Resida is not just an app"
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
    <InfoCard  
       title="Do you have a property?"
       subtitle="Provide accommodation
       here in Lagos"
       body="Own a property in Lagos? Join our platform to effortlessly list your accommodations and connect with eager tenants seeking their perfect home in the vibrant city of Lagos"
        image={grpG}
        imageHeight={"info_comp_househeight"}
        imageStyle={"info_comprehensive"}
        button={true}
        infoStyle={"info_guide"}
        circle={true}
        circleStyletitle={true}
        circleStylesub={"info_circle_subtitle"}
        reverse
      />
    <DiscoverPlace />
    <FindYourOffice />

    </div>
  )
}

export default LandingPage;
