import TitleHeader from "../components/TitleHeader";
import { certificateCards } from "../constants";

const Certificates = () => (
  <section id="certificates" className="flex-center section-padding xl:px-0">
    <div className="w-full h-full md:px-20 px-5">
      <TitleHeader
        title="Certificates & Achievements"
        sub="📜 My Verified Credentials"
      />
      <div className="mt-20 grid md:grid-cols-2 gap-10">
        {certificateCards.map((cert, idx) => (
          <div
            key={idx}
            className="card-border rounded-xl p-8 flex flex-col gap-4 bg-[#181A20]"
          >
            <div className="flex items-center gap-4">
              <img
                src={cert.imgPath}
                alt={cert.title}
                className="w-20 h-20 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-white text-xl font-semibold">
                  {cert.title}
                </h3>
                <p className="text-white-50 text-md">{cert.issuer}</p>
                <p className="text-white-50 text-sm">{cert.date}</p>
              </div>
            </div>
            <p className="text-white-50 mt-2">{cert.description}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline mt-2"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
