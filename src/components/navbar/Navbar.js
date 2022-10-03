import NavShortcut from "./NavShortcut";
import invergeLogo from "../images/inverge_logo.png";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [navbg, onSetNavbgtoviolet] = useState(false);
  const changebg = () => {
    if (window.scrollY >= 78) {
      onSetNavbgtoviolet(true);
    } else {
      onSetNavbgtoviolet(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changebg);
  }, []);

  return (
    <nav
      className={`h-20 flex justify-between px-4 md:px-16 xs:px-10 sticky top-[-72px] left-0 w-full transition-all duration-500 z-50 ${
        navbg
          ? "bg-gradient-to-r from-[#360033] to-[#0b8793] top-0 shadow-[_0_7px_29px_0_rgba(100,100,111,0.2)]"
          : "bg-gradient-to-r from-[#360033] to-[#0b8793]"
      }`}
    >
      <div className="h-fit my-auto">
        <div className="w-fit px-4 py-2 h-10 flex items-center rounded-3xl bg-white">
          <img className="h-full" src={invergeLogo} alt="logo" />
          <h1 className="text-lg ml-1 font-bold">INVERGE</h1>
        </div>
      </div>
      <div className="lg:hidden w-10 h-9 my-auto">
        <FontAwesomeIcon
          className={`w-full h-full ${navbg ? "text-white" : "text-black"}`}
          icon={faBars}
          size="2x"
        />
      </div>
      <ul className="hidden h-fit my-auto lg:flex lg:gap-8">
        <NavShortcut>Home</NavShortcut>
        <NavShortcut>Services</NavShortcut>
        <NavShortcut>Message</NavShortcut>
        <NavShortcut>Projects</NavShortcut>
        <NavShortcut>Highlight</NavShortcut>
        <NavShortcut>Team</NavShortcut>
        <NavShortcut>Testimonial</NavShortcut>
      </ul>
    </nav>
  );
};
export default Navbar;
