import HeroSection from 'components/heroSection';
import SubHeroSection from 'components/subHeroSection';
import React from 'react'
// import './landingPage.css'
import Header from 'shared/header';
// import InfoCard from 'components/infocard';
const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SubHeroSection />
       {/* <InfoCard /> */}
    </div>
  )
}

export default LandingPage;
