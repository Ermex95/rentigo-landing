import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Use ref to store last scroll position to avoid stale closures in useEffect
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Logic for Shrinking (Style)
      setScrolled(currentScrollY > 50);

      // Logic for Smart Hide/Show (Visibility)
      if (currentScrollY < 50) {
        // Always show at the very top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling DOWN -> Hide
        setIsVisible(false);
      } else {
        // Scrolling UP -> Show
        setIsVisible(true);
      }

      // Update last scroll position
      lastScrollY.current = currentScrollY;

      // Active Section Logic
      const sections = ['home', 'features', 'testimonials', 'contact'];
      // Offset to trigger active state slightly before section hits top
      const scrollPosition = window.scrollY + 300; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Funzionalità', id: 'features' },
    { name: 'Soluzioni', id: 'testimonials' },
    { name: 'Prezzi', id: 'contact' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}`}>
      {/* Navbar Container */}
      <nav className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-between ${
        scrolled 
          ? 'w-[90%] max-w-5xl bg-white/95 backdrop-blur-xl shadow-soft rounded-full py-3 px-6 border border-emerald-100/50' 
          : 'w-[95%] max-w-7xl bg-white/60 backdrop-blur-sm shadow-none rounded-full py-5 px-8 border border-transparent'
      }`}>
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
            {/* Custom SVG Logo Rentigo - Increased Size */}
            <div className={`relative transition-all duration-500 ${scrolled ? 'w-11 h-11' : 'w-14 h-14'} group-hover:scale-105`}>
              <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="2.5" width="35" height="35" rx="9.5" stroke="#67ba52" strokeWidth="4" fill="white"/>
                <path d="M20 9L11 17.5V28.5C11 29.6046 11.8954 30.5 13 30.5H27C28.1046 30.5 29 29.6046 29 28.5V17.5L20 9Z" stroke="#4a524f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="17" y="22" width="6" height="6" rx="1.5" fill="#67ba52"/>
              </svg>
            </div>
            <span className={`font-bold text-brandGray tracking-tight group-hover:text-primary transition-all duration-500 font-sans ${scrolled ? 'text-2xl' : 'text-3xl'}`}>Rentigo</span>
          </a>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-1 lg:gap-2 transition-all duration-500 ${scrolled ? 'scale-95' : 'scale-100'}`}>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`relative px-4 lg:px-5 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 z-10 overflow-hidden ${
                  activeSection === link.id 
                    ? 'text-primary font-bold' 
                    : 'text-brandGray hover:text-primary'
                }`}
              >
                {/* Bubble Background Animation for Active State */}
                <span className={`absolute inset-0 bg-primary/10 rounded-full transition-transform duration-300 ease-out -z-10 ${activeSection === link.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></span>
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className={`group flex items-center gap-2 rounded-full bg-brandGray text-white font-semibold hover:bg-gray-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${scrolled ? 'px-5 py-2.5 text-xs' : 'pl-6 pr-5 py-3 text-sm'}`}>
              Scarica App
              <div className={`bg-white/20 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors ${scrolled ? 'w-4 h-4' : 'w-5 h-5'}`}>
                 <ChevronRight size={scrolled ? 10 : 12} />
              </div>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 bg-white rounded-full shadow-sm border border-gray-100" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-brandGray" /> : <Menu size={24} className="text-brandGray" />}
          </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl p-6 shadow-2xl border border-emerald-100 animate-in slide-in-from-top-5 pointer-events-auto mx-auto w-[95%]">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  className={`text-lg font-medium p-2 ${activeSection === link.id ? 'text-primary font-bold bg-primary/5 rounded-lg' : 'text-brandGray'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-gray-100" />
              <button className="w-full py-3.5 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20">
                Inizia Gratis
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;