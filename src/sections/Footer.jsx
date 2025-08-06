const Footer = () => {

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/shambhuraj-gadhave-39b221347/", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" },
    { name: "GitHub", url: "https://github.com/shambhuraj0007", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Portfolio", url: "#hero", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p className="text-xs sm:text-sm">Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target={social.url.startsWith('http') ? "_blank" : "_self"}
              rel={social.url.startsWith('http') ? "noopener noreferrer" : ""}
              className="icon hover:scale-110 transition-transform duration-200"
              aria-label={`Visit ${social.name}`}
            >
              <img src={social.icon} alt={`${social.name} icon`} className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end text-xs sm:text-sm">
            © {new Date().getFullYear()} Shambhuraj Gadhave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
