import React, { useState } from 'react';

const NavbarComp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Cierra el menú móvil después de hacer clic
  };
  
  return (
    <nav className="bg-primary w-full fixed top-0 left-0 font-sans z-50 sticky  z-50 h-16 ">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="font-accent text-background-main hover:bg-secondary hover:text-background-main px-3 py-2 rounded-md text-sm font-medium">Home</button>
                <button onClick={() => scrollToSection('about')} className="font-accent text-background-main hover:bg-secondary hover:text-background-main px-3 py-2 rounded-md text-sm font-medium">About</button>
                <button onClick={() => scrollToSection('projects')} className="font-accent text-background-main hover:bg-secondary hover:text-background-main px-3 py-2 rounded-md text-sm font-medium">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="font-accent text-background-main hover:bg-secondary hover:text-background-main px-3 py-2 rounded-md text-sm font-medium">Contact</button>
              </div>
            </div>
          </div>
          <div className="mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-background-main hover:text-background-main hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-secondary focus:ring-background-main"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className="font-accent text-background-main hover:bg-secondary hover:text-background-main block w-full text-left px-3 py-2 rounded-md text-base font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="font-accent text-background-main hover:bg-secondary hover:text-background-main block w-full text-left px-3 py-2 rounded-md text-base font-medium">About</button>
            <button onClick={() => scrollToSection('projects')} className="font-accent text-background-main hover:bg-secondary hover:text-background-main block w-full text-left px-3 py-2 rounded-md text-base font-medium">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="font-accent text-background-main hover:bg-secondary hover:text-background-main block w-full text-left px-3 py-2 rounded-md text-base font-medium">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComp;