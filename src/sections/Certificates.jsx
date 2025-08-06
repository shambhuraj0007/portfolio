import TitleHeader from "../components/TitleHeader";
import { certificateCards } from "../constants";

const Certificates = () => (
  <section id="certificates" className="flex-center section-padding xl:px-0">
    <div className="w-full h-full md:px-20 px-4 sm:px-6">
      <TitleHeader
        title="Certificates & Achievements"
        sub="📜 My Verified Credentials"
      />
      <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {certificateCards.map((cert, idx) => (
          <div
            key={idx}
            className="card-border rounded-xl p-4 sm:p-6 md:p-8 flex flex-col gap-4 bg-[#181A20] hover:bg-[#1f2128] transition-colors duration-300"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <img
                src={cert.imgPath}
                alt={cert.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-white text-lg sm:text-xl font-semibold line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-white-50 text-sm sm:text-md mt-1">{cert.issuer}</p>
                <p className="text-white-50 text-xs sm:text-sm mt-1">{cert.date}</p>
              </div>
            </div>
            <p className="text-white-50 text-sm sm:text-base mt-2 line-clamp-3">{cert.description}</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-2 bg-[#cd7c2e] text-white rounded-lg text-center text-sm sm:text-base font-semibold hover:bg-[#b86a1f] transition-colors duration-200"
              >
                View Certificate
              </a>
              <a
                href={cert.verificationLink || cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-2 border border-[#cd7c2e] text-[#cd7c2e] rounded-lg text-center text-sm sm:text-base font-semibold hover:bg-[#cd7c2e] hover:text-white transition-colors duration-200"
              >
                Verify
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
