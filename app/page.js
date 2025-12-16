'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Approach from '@/components/Approach';
import WhyChooseUs from '@/components/WhyChooseUs';
import SoftwareServices from '@/components/SoftwareServices';
import HardwareServices from '@/components/HardwareServices'; 
import Solutions from '@/components/Solutions';
import BlogSection from '@/components/BlogSection';
import FAQ from '@/components/FAQ';
import TechFAQ from '@/components/TechFAQ';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('page-transition');
    
    const timer = setTimeout(() => {
      document.body.classList.remove('page-transition');
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <main>
        <ScrollAnimation animation="fade-up">
          <Hero />
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={100}>
          <Services />
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={100}>
          <Approach /> 
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
        <SoftwareServices />
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <HardwareServices />
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={200}>
          <Solutions />
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={900}>
          <BlogSection /> 
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <FAQ />
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={800}>
          <TechFAQ />
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={200}>
          <About />
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <WhyChooseUs />
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-up" delay={200}>
          <Contact />
        </ScrollAnimation>
      </main>
      
      <Footer />
      <BackToTop />
    </>
  );
}