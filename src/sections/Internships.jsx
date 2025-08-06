import TitleHeader from "../components/TitleHeader";
import { internshipCards } from "../constants";

const Internships = () => (
  <section id="internships" className="flex-center section-padding xl:px-0">
    <div className="w-full h-full md:px-20 px-4 sm:px-6">
      <TitleHeader
        title="Internships"
        sub="🛠️ My Industry Experience"
      />
      <div className="mt-12 sm:mt-16 md:mt-20 space-y-6 sm:space-y-8 md:space-y-10">
        {internshipCards.map((intern, idx) => (
          <div key={idx} className="card-border rounded-xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 bg-[#181A20] hover:bg-[#1f2128] transition-colors duration-300">
            <div className="flex justify-center md:justify-start">
              <img src={intern.imgPath} alt={intern.company} className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain rounded-lg" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                <img src={intern.logoPath} alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                <h3 className="text-white text-lg sm:text-xl font-semibold">{intern.company}</h3>
              </div>
              <p className="text-white-50 text-sm sm:text-base font-semibold mb-1">{intern.role}</p>
              <p className="text-white-50 text-xs sm:text-sm mb-3 sm:mb-4">{intern.date}</p>
              <p className="text-[#839CB5] italic text-sm sm:text-base mb-2 sm:mb-3">Responsibilities</p>
              <ul className="list-disc ms-4 sm:ms-5 mt-2 sm:mt-3 flex flex-col gap-1.5 sm:gap-2 text-white-50">
                {intern.responsibilities.map((resp, i) => (
                  <li key={i} className="text-sm sm:text-base md:text-lg leading-relaxed">{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Internships; 