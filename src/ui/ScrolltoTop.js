import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const ScrolltoTop = (props) => {
  return (
    <div
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="w-fit fixed z-50 shadow-[_0_5px_15px_rgba(0,0,0,0.35)] right-8 bottom-3 rounded-md py-2 px-3 bg-[#24395C] cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-150"
    >
      <FontAwesomeIcon className="text-white" icon={faArrowUp} />
    </div>
  );
};
export default ScrolltoTop;
