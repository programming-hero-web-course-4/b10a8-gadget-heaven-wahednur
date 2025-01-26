import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
const Navbar = () => {
  const cpath = useLocation().pathname;
  const { cartItem, wishItem } = useContext(ProductContext);

  return (
    <div
      className={`${cpath === "/" ? "home" : "bg-white"} group relative z-20`}
    >
      <div className={`${cpath === "/" ? "home" : ""} group container`}>
        <div className="flex items-center justify-between  h-[40px] py-10">
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
            <Link
              to="/dashboard"
              className="relative text-xl rounded-full p-2.5 hover:bg-primary duration-300 hover:text-white border border-secondary/10 group-[.home]:bg-white group-[.home]:text-secondary"
            >
              <AiOutlineShoppingCart />
              {cartItem.length > 0 && (
                <small className="absolute text-xs text-white -top-4 -right-1.5 flex items-center justify-center bg-primary px-2 py-1 rounded-full">
                  {cartItem.length}
                </small>
              )}
            </Link>
            <button className="text-xl relative rounded-full p-2.5 hover:bg-primary duration-300 hover:text-white  border border-secondary/10 group-[.home]:bg-white group-[.home]:text-secondary">
              <CiHeart />
              {wishItem.length > 0 && (
                <small className="absolute text-xs text-white -top-4 -right-1.5 flex items-center justify-center bg-secondary px-2 py-1 rounded-full">
                  {wishItem.length}
                </small>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
