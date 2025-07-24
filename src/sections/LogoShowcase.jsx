import { technicalSkills } from "../constants";

const SkillIcon = ({ skill }) => (
  <div className="flex-none flex flex-col items-center justify-center marquee-item">
    <img src={skill.imgPath} alt={skill.name} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
    <span className="mt-2 text-sm text-center text-gray-600 dark:text-gray-300">{skill.name}</span>
  </div>
);

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <h2 className="text-xl md:text-2xl font-bold text-center mb-6">💻 Technical Skills</h2>

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {technicalSkills.map((skill, index) => (
          <SkillIcon key={index} skill={skill} />
        ))}
        {/* Duplicate for smooth looping */}
       
      </div>
    </div>
  </div>
);

export default LogoShowcase;
