import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
const Navbar = () => {
  const cpath = useLocation().pathname;

  return (
    <div className="relative z-20">
      <div className={`${cpath === "/" ? "home" : ""} group container`}>
        <div className="flex items-center justify-between  h-[40px] mt-10">
          <Link className={`text-[20px] font-bold`} to="/">
            Gadget Heaven
          </Link>
          <ul className="lg:flex items-center gap-[48px] desk-nav hidden">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
          <div className="flex items-center gap-1">
            <button className="text-xl rounded-full p-2.5 hover:bg-primary duration-300 hover:text-white border border-secondary/10 group-[.home]:bg-white group-[.home]:text-secondary">
              <AiOutlineShoppingCart />
            </button>
            <button className="text-xl rounded-full p-2.5 hover:bg-primary duration-300 hover:text-white  border border-secondary/10 group-[.home]:bg-white group-[.home]:text-secondary">
              <CiHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
