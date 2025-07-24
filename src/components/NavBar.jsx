import { useState, useEffect } from "react";

import { navLinks } from "../constants";
import Button from "./Button";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

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
  {name:"LinkedIn",link:"https://www.linkedin.com/in/shambhuraj-gadhave/"},
  {name:"GitHub",link:"https://github.com/shambhurajgadhave"},
  {name:"LeetCode",link:"https://leetcode.com/shambhurajgadhave/"},
  {name:"GFG",link:"https://auth.geeksforgeeks.org/user/shambhurajgadhave/"},
  {name:"Resume",link:"/resume.pdf"},
];


  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Shambhuraj Gadhave
        </a>

        {/* Section navigation buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {sectionButtons.map((btn) => (
            <a
              key={btn.name}
              href={btn.link}
              className="px-5 py-2 rounded-full bg-[#23272f] text-white hover:bg-[#cd7c2e] transition-colors duration-200 shadow-md border border-[#333] text-base font-semibold"
              onClick={e => {
                e.preventDefault();
                const el = document.querySelector(btn.link);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
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