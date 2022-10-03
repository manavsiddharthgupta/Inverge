import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { TextField } from "@mui/material";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="pt-28 pb-8 px-4 md:px-16 xs:px-10 bg-[#f5f3f3]">
        <div className="flex justify-between mb-10 flex-wrap gap-6">
          <h1 className="text-2xl xs:text-4xl font-semibold">
            Join Our Newsletter
          </h1>
          <div className="flex w-[500px]">
            <TextField
              label="Enter Your E-mail"
              variant="filled"
              size="small"
              fullWidth
            />
            <button className="bg-[#24395C] text-white px-4 hover:bg-[#340436] transition-colors duration-150 rounded-[0_5px_5px_0]">
              Send
            </button>
          </div>
        </div>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between">
          <div className="w-[210px]">
            <h1 className="text-lg font-semibold">About Us</h1>
            <p className="my-4 text-gray-500">
              Lorem ipsum dolor sit amet, consect adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
            <div className="flex gap-3">
              <div className="transition-all duration-300 px-2 py-1 bg-slate-200 rounded-sm cursor-pointer hover:text-white hover:bg-[#24395C]">
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div className="transition-all duration-300 px-2 py-1 bg-slate-200 rounded-sm cursor-pointer hover:text-white hover:bg-[#24395C]">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
              <div className="transition-all duration-300 px-2 py-1 bg-slate-200 rounded-sm cursor-pointer hover:text-white hover:bg-[#24395C]">
                <FontAwesomeIcon icon={faDiscord} />
              </div>
              <div className="transition-all duration-300 px-2 py-1 bg-slate-200 rounded-sm cursor-pointer hover:text-white hover:bg-[#24395C]">
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </div>
          </div>
          <div className="w-[210px]">
            <h1 className="text-lg font-bold mb-4">Important Links</h1>
            <ul>
              <li className="cursor-pointer w-max hover:text-[#24395C] font-medium">
                About Us
              </li>
              <li className="cursor-pointer w-max hover:text-[#24395C] font-medium my-2">
                Services
              </li>
              <li className="cursor-pointer w-max hover:text-[#24395C] font-medium my-2">
                Message
              </li>
              <li className="cursor-pointer w-max hover:text-[#24395C] font-medium my-2">
                Project
              </li>
              <li className="cursor-pointer w-max hover:text-[#24395C] font-medium">
                Contact us
              </li>
            </ul>
          </div>
          <div className="w-[210px]">
            <h1 className="text-lg font-bold mb-4">Featured Services</h1>
            <ul>
              <li className="cursor-pointer w-max hover:text-[#24395C] font-medium">
                Web Development
              </li>
              <li className="cursor-pointer w-max hover:text-[#24395C] font-medium my-2">
                App Development
              </li>
              <li className="cursor-pointer w-max hover:text-[#24395C] font-medium my-2">
                Video Editing
              </li>
              <li className="cursor-pointer w-max hover:text-[#24395C] font-medium my-2">
                Robotics & IoT Solution
              </li>
              <li className="cursor-pointer w-max hover:text-[#24395C] font-medium">
                Graphics Design
              </li>
            </ul>
          </div>
          <div className="w-[210px]">
            <h1 className="text-lg font-bold mb-4">Contact Us</h1>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                className="text-[#24395C]"
                size="2x"
                icon={faPhone}
              />
              <div>
                <h1 className="font-medium">Phone</h1>
                <p>+91 6207337493</p>
              </div>
            </div>
            <div className="flex items-center gap-4 my-2">
              <FontAwesomeIcon
                className="text-[#24395C]"
                size="2x"
                icon={faEnvelope}
              />
              <div>
                <h1 className="font-medium">E-mail</h1>
                <p>invergespace@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                className="text-[#24395C]"
                size="2x"
                icon={faLocationDot}
              />
              <div>
                <h1 className="font-medium">Address</h1>
                <p>Kiit, Bhubaneswar, Oddisa</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="py-4 text-center text-white font-medium bg-[#24395C]">
        <p>© All rights reserved | Inverge</p>
      </div>
    </Fragment>
  );
};
export default Footer;
