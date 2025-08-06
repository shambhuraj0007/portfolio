import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      ref: rydeRef,
      title: "Vibly - Social Media Platform",
      description: "A full-stack social media platform built with Next.js & TailwindCSS for seamless user interactions.",
      image: "/images/project1.png",
      link: "https://github.com/shambhuraj0007/vibly",
      demoLink: "https://vibly-iota.vercel.app/",
      technologies: ["Next.js", "TailwindCSS", "MongoDB", "Node.js"]
    },
    {
      ref: libraryRef,
      title: "Plant Disease Detection App",
      description: "AI-powered plant disease detection using CNN with 96% accuracy.",
      image: "/images/vibly-demo.mp",
      link: "https://github.com/shambhuraj0007/PlantDiseaseRecognizer",
      demoLink: "https://plantdiseaserecognizer-jzekrenc97vzfddv3fa2fd.streamlit.app/", 
      technologies: ["Python", "TensorFlow", "Streamlit", "CNN"]
    },
   
  ];

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src={projects[0].image} alt={projects[0].title} />
            </div>
            <div className="text-content">
              <div className="flex flex-wrap gap-2 mb-3">
                {projects[0].technologies.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-[#23272f] text-xs rounded-full text-white-50">
                    {tech}
                  </span>
                ))}
              </div>
              <h2>{projects[0].title}</h2>
              <p className="text-white-50 md:text-xl">
                {projects[0].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <a
                  href={projects[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#cd7c2e] text-white rounded-lg text-center font-semibold hover:bg-[#b86a1f] transition-colors duration-200"
                >
                  View Code
                </a>
                <a
                  href={projects[0].demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#cd7c2e] text-[#cd7c2e] rounded-lg text-center font-semibold hover:bg-[#cd7c2e] hover:text-white transition-colors duration-200"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {projects.slice(1).map((project, index) => (
              <div key={index} className="project" ref={project.ref}>
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="mt-3 sm:mt-4 md:mt-5">
                  <h2>{project.title}</h2>
                  <p className="text-white-50 text-sm sm:text-base mt-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-[#23272f] text-xs rounded-full text-white-50">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 mt-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#cd7c2e] text-white rounded text-center text-sm font-semibold hover:bg-[#b86a1f] transition-colors duration-200"
                    >
                      Code
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 border border-[#cd7c2e] text-[#cd7c2e] rounded text-center text-sm font-semibold hover:bg-[#cd7c2e] hover:text-white transition-colors duration-200"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
