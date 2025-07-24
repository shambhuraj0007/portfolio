import TitleHeader from "../components/TitleHeader";
import { internshipCards } from "../constants";

const Internships = () => (
  <section id="internships" className="flex-center section-padding xl:px-0">
    <div className="w-full h-full md:px-20 px-5">
      <TitleHeader
        title="Internships"
        sub="🛠️ My Industry Experience"
      />
      <div className="mt-20 space-y-10">
        {internshipCards.map((intern, idx) => (
          <div key={idx} className="card-border rounded-xl p-8 flex flex-col md:flex-row gap-8 bg-[#181A20]">
            <img src={intern.imgPath} alt={intern.company} className="w-32 h-32 object-contain rounded-lg" />
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <img src={intern.logoPath} alt="logo" className="w-10 h-10 object-contain" />
                <h3 className="text-white text-xl font-semibold">{intern.company}</h3>
              </div>
              <p className="text-white-50 text-md font-semibold">{intern.role}</p>
              <p className="text-white-50 text-sm mb-2">{intern.date}</p>
              <p className="text-[#839CB5] italic">Responsibilities</p>
              <ul className="list-disc ms-5 mt-2 flex flex-col gap-2 text-white-50">
                {intern.responsibilities.map((resp, i) => (
                  <li key={i} className="text-lg">{resp}</li>
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