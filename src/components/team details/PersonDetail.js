import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const PersonDetail = (props) => {
  return (
    <div className="w-[300px] rounded-md group text-center mb-8 shadow-[_0_7px_29px_0_rgba(100,100,111,0.2)]">
      <div className="h-72 p-8 bg-gray-300"></div>
      <div className="py-5 group-hover:bg-[#204362] transition-all duration-300 relative bg-white">
        <div className="opacity-0 rounded-3xl bg-slate-200 items-center w-fit group-hover:opacity-100 flex gap-2 px-5 py-1 absolute -top-4 left-2/4 -translate-x-2/4 transition-all duration-300">
          <a href="www.google.com">
            <FontAwesomeIcon
              className="h-5 w-5 text-gray-700 hover:text-black"
              icon={faInstagram}
              size="2x"
            />
          </a>
          <a href="www.google.com">
            <FontAwesomeIcon
              className="h-5 w-5 text-gray-700 hover:text-black"
              icon={faGithub}
              size="2x"
            />
          </a>
          <a href="www.google.com">
            <FontAwesomeIcon
              className="h-5 w-5 text-gray-700 hover:text-black"
              icon={faLinkedinIn}
              size="2x"
            />
          </a>
        </div>
        <h1 className="text-lg font-semibold group-hover:text-white transition-all duration-50">
          {props.details.name}
        </h1>
        <p className="text-gray-500 group-hover:text-gray-300 transition-all duration-50 hover:text-black">
          Co-Founder
        </p>
      </div>
    </div>
  );
};
export default PersonDetail;
