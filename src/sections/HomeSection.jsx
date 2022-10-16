// Import:
// IosIcons icons:
import { IoIosArrowDropright, IoIosArrowDropdownCircle } from "react-icons/io";

// React scroll:
import { Link } from "react-scroll";

// Home section function:
function HomeSection() {
  return (
    <div name="home" className="bg-white w-full h-screen">
      {/* container */}
      <div className="container flex flex-col lg:flex-row items-center justify-center h-full mx-auto space-y-20 lg:space-x-20">
        <div className="max-w-[1000px] px-8 flex flex-col justify-center lg:h-full">
          {/* Sub text */}
          <h1 className="sm:text-2xl py-2 font-bold text-[#000000]">
            My name is
          </h1>

          {/* Name */}
          <h2 className="text-6xl sm:text:text-7xl font-bold text-red">
            Taha Chaudhry
          </h2>

          {/* Description */}
          <p className="text-[#000000] text-2xl py-2 max-w-[500px]">
            and im a fullstack developer!
          </p>

          {/* View projects */}
          <div>
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              {/* Buttons */}
              <button className=" text-white bg-red border-2 border-darkgray group px-6 py-3 my-2 flex items-center mx-auto lg:mx-0 hover:text-red hover:bg-white hover:border-red hover:animate-bounce">
                View Projects
                {/* Icons */}
                {/* Right arrow */}
                <span className="block group-hover:hidden">
                  <IoIosArrowDropright className="ml-3" />
                </span>
                {/* Down arrow */}
                <span className="hidden group-hover:block">
                  <IoIosArrowDropdownCircle className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Portrait */}
        <div>
          <div>
            <img
              className="w-64 h-64 rounded-md border-2 border-red"
              src="https://avatars.githubusercontent.com/u/93952601?s=400&u=88d63de07175478737ba481f5cf307dc0120cd52&v=4"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Export:
export default HomeSection;
