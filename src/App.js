import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';
import FeatureSection from './components/FeatureSection';
import AboutUs from './components/AboutUs';
import VideoSection from './components/VideoSection';
import HowItWorks from './components/HowItWorks ';
import Testimonials from './components/Testimonials';
import FAQ from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutUs/>
      <VideoSection/>
      <FeatureSection />
      <HowItWorks/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
