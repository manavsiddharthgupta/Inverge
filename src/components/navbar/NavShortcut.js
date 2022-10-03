import { Link } from "react-scroll";
const NavShortcut = (props) => {
  return (
    <li className="font-medium transition-all duration-200 ease-in-out text-gray-300 cursor-pointer hover:text-white">
      <Link activeClass="text-white" spy smooth to={props.children}>
        {props.children}
      </Link>
    </li>
  );
};
export default NavShortcut;
