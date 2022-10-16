// Imports:
// Imported useState hooks:
import { useState } from "react";

// Icons:
// Font Awesome icons:
// Hamburger, Github, LinkedIn icons:
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";

// IonIcons icons:
// Mail and Close button :
import { IoIosMail, IoIosCloseCircle } from "react-icons/io";

// Scrolling:
// React Scroll:
import { Link } from "react-scroll";

function NavbarComponent() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    // Navbar
    <div className="fixed w-full h-[80px] flex justify-center items-center border-b-4 border-darkgray bg-red text-white">
      <Link to="home" smooth={true} duration={500} offset={-80}></Link>

      {/* Navbar Menu */}
      <ul className="hidden md:flex space-x-4">
        <li className="hover:text-darkgray">
          <Link to="home" smooth={true} duration={500} offset={-80}>
            Home
          </Link>
        </li>
        <li className="hover:text-darkgray">
          <Link to="aboutme" smooth={true} duration={500} offset={-80}>
            About Me
          </Link>
        </li>
        <li className="hover:text-darkgray">
          <Link to="projects" smooth={true} duration={500} offset={-80}>
            Projects
          </Link>
        </li>
        <li className="hover:text-darkgray">
          <Link to="contactme" smooth={true} duration={500} offset={-80}>
            Contact Me
          </Link>
        </li>
      </ul>

      {/* Hamburger / Mobile phone menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <IoIosCloseCircle />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-red flex flex-col justify-center items-center"
        }
      >
        {/* View Home section */}
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Home
          </Link>
        </li>
        {/* View About Me section */}
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="aboutme"
            smooth={true}
            duration={500}
            offset={-80}
          >
            About Me
          </Link>
        </li>
        {/* View Projects section */}
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Projects
          </Link>
        </li>
        {/* View Contact me section */}
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contactme"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Contact Me
          </Link>
        </li>
      </ul>

      {/* Social Media icons */}

      {/* LinkedIn */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2D64BC]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/taha/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          {/* GitHub */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0E1116]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/tahachaudhry"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          {/* Email */}
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#57B6F3]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="mailto:taha@nyu.edu"
              target="_blank"
              rel="noreferrer"
            >
              Email <IoIosMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarComponent;
