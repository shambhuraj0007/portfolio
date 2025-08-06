const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
      <div className="hero-badge">
        <p className="text-xs sm:text-sm md:text-base">{sub}</p>
      </div>
      <div>
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center leading-tight">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
