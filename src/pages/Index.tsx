import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ExperienceSection from '@/components/Experience';
import EducationSection from '@/components/Education';
import CareerUpdate from '@/components/CareerUpdate';
import Certifications from '@/components/Certifications';
import ContactSection from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const Index: React.FC = () => {
  useEffect(() => {
    // Smooth scrolling behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    // Set Favicon
    const setFavicon = () => {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;

      if (link) {
        link.href = "/favicon.png"; // Correct way to update existing favicon
      } else {
        const newLink = document.createElement("link");
        newLink.rel = "icon";
        newLink.type = "image/png";
        newLink.href = "/favicon.png";
        document.head.appendChild(newLink);
      }
    };

    setFavicon();
  }, []);

  return (
    <div className="min-h-screen w-full bg-background antialiased">
      <Header />
      
      <main>
        <Hero />
        <About />
        <CareerUpdate />
        <ExperienceSection />
        <EducationSection />
        <Certifications />
        <ContactSection />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
