import { useState, useEffect } from "react";

import { navLinks } from "../constants";
import Button from "./Button";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionButtons = [
    ...navLinks,
    { name: "Certificates", link: "#certificates" },
    { name: "Internships", link: "#internships" },
    { name: "Contact", link: "#contact" },
    {name:"LinkedIn",link:"https://www.linkedin.com/in/shambhuraj-gadhave-39b221347"},
    {name:"GitHub",link:"https://github.com/shambhuraj0007"},
    {name:"LeetCode",link:"https://leetcode.com/u/shambhuraj007/"},
    {name:"GFG",link:"https://auth.geeksforgeeks.org/user/shambhurajgadhave/"},
    {name:"Resume",link:"https://drive.google.com/file/d/1xeYZOJiDc2-jP3a1L1R2zNED3-Wv_Seq/view?usp=sharing"},
  ];

  const handleNavClick = (link) => {
    setIsMobileMenuOpen(false);
    if (link.startsWith('#')) {
      const el = document.querySelector(link);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Shambhuraj Gadhave
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-wrap justify-center gap-2">
          {sectionButtons.map((btn) => (
            <a
              key={btn.name}
              href={btn.link}
              className="px-3 sm:px-4 md:px-5 py-2 rounded-full bg-[#23272f] text-white hover:bg-[#cd7c2e] transition-colors duration-200 shadow-md border border-[#333] text-sm sm:text-base font-semibold"
              onClick={e => {
                e.preventDefault();
                handleNavClick(btn.link);
              }}
            >
              {btn.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-[#23272f] border border-[#333]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-black border-t border-[#333] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col p-4 space-y-2">
          {sectionButtons.map((btn) => (
            <a
              key={btn.name}
              href={btn.link}
              className="px-4 py-3 rounded-lg bg-[#23272f] text-white hover:bg-[#cd7c2e] transition-colors duration-200 border border-[#333] text-base font-semibold text-center"
              onClick={e => {
                e.preventDefault();
                handleNavClick(btn.link);
              }}
            >
              {btn.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default NavBar;