import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words, navLinks } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const sectionButtons = [
  ...navLinks,
  { name: "Certificates", link: "#certificates" },
  { name: "Internships", link: "#internships" },
  { name: "Contact", link: "#contact" },
];

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" className="w-full h-auto" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center w-full px-4 sm:px-6 md:px-20">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-7">
            <div className="hero-text">
              <h1 className="leading-tight">
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 sm:gap-2 md:gap-3 pb-1 sm:pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="size-6 sm:size-7 md:size-8 lg:size-10 rounded-full bg-white-50 p-1 sm:p-1.5 md:p-2"
                        />
                        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="leading-tight">Engineering Innovation</h1>
              <h1 className="leading-tight">One Pixel at a Time</h1>
            </div>

            <p className="text-white-50 text-base sm:text-lg md:text-xl relative z-10 pointer-events-none leading-relaxed">
              Hi, I'm Shambhuraj Gadhave from DYPCOE. I'm a passionate full-stack developer with expertise in MERN stack, AI/ML, and problem-solving.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                text="See My Work"
                className="w-full sm:w-auto px-6 py-3 sm:py-4 text-base sm:text-lg"
                id="counter"
              />
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 sm:py-4 text-base sm:text-lg border border-[#cd7c2e] text-[#cd7c2e] rounded-lg text-center font-semibold hover:bg-[#cd7c2e] hover:text-white transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure className="hidden md:block">
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
