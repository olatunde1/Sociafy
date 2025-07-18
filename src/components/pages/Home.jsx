import React from 'react'
import Header from '../layout/Header'
import Hero from '../layout/Hero'
import GettingStarted from '../GettingStarted'
import TrendingAccount from '../TrendingAccount'
import Swiper from '../Swiper'
import FAQSection from '../Faq'
import Footer from '../layout/Footer'

const Home = () => {
  
  return <>
    <Header />
    <Hero />
    <GettingStarted />
    <TrendingAccount />
    <Swiper />
    <FAQSection />
    <Footer />

  </>
}

export default Home