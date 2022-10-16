// About me section function:
const AboutMeSection = () => {
  return (
    <div name="aboutme" className="w-full h-screen bg-darkgray text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            {/* Title */}
            <p className="text-4xl font-bold inline border-b-4 border-red">
              About Me:
            </p>
          </div>
        </div>

        {/* Sub-heading */}
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-9 px-4 space-y-6 sm:space-y-0">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              <p>Who am I?</p>
            </p>
          </div>

          {/* Body text */}
          <div className="space-y-2">
            <p>
              My name is Taha Chaudhry and I am currently working as a IT Analyst.I am currently
              undertaking a coding boot camp.
            </p>
            {/* View CV */}
            <a
              href="https://github.com/tahachaudhry/Portfolio/blob/main/Assets/TahaChaudhry_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button className=" text-white bg-red border-2 border-darkgray group px-6 py-3 my-2 flex items-center mx-auto lg:mx-0 hover:text-red hover:bg-white hover:border-red hover:animate-bounce">
                View my CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export:
export default AboutMeSection;
