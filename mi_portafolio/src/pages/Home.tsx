import React, { useState, useEffect, useRef } from 'react';
import NavbarComp from '../components//NavbarComp';
import NavigationDots from '../components/NavigationDots';
import About from '../components/About';
import Hobbies from '../components/Hobbies';
import Projects from '../components/Projects';
import ContactMe from '../components/Contact';

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionsRef.current) {
        const sectionHeight = window.innerHeight;
        const scrollPosition = sectionsRef.current.scrollTop;
        const newActiveSection = Math.round(scrollPosition / sectionHeight);
        setActiveSection(newActiveSection);
      }
    };

    const sectionsElement = sectionsRef.current;
    if (sectionsElement) {
      sectionsElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (sectionsElement) {
        sectionsElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <NavbarComp />
      <div
        ref={sectionsRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
      >
        <section id='about' className="h-screen snap-start bg-background-main flex items-center justify-center">
          <About  title={"About Me"} 
          />
        </section>

        <section id='hobbies' className="h-screen snap-start bg-background-secondary flex items-center justify-center">
          <Hobbies />
        </section>

        <section id='projects' className="h-screen snap-start bg-background-main flex items-center justify-center">
          <Projects />
        </section>

        <section id='contact' className="h-screen snap-start bg-background-secondary flex items-center justify-center">
          <ContactMe />
        </section>
      </div>
      <NavigationDots activeSection={activeSection} />
    </div>
  );
};

export default Home;