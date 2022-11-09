import React from 'react'
import FirstSection from './AboutPageSectins/FirstSection'
import SecondSection from './AboutPageSectins/SecondSection'
import Footer from './Footer'
import Header from './Header'

import Subscription from './Subscription'

function About() {
  return (
    <div>
      <Header />

      <FirstSection />
      <SecondSection backGroundColor ="#F7FFF6"/>
      <Subscription />
      <Footer />
    </div>
  )
}

export default About
