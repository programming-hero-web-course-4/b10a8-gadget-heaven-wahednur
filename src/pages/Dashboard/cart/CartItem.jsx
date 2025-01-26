import PropTypes from "prop-types";
import { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import ProductContext from "../../../components/context/ProductContext";

const CartItem = ({ cart }) => {
  const { removeToCart } = useContext(ProductContext);
  return (
    <div className="flex items-center justify-between gap-6 p-6 bg-white rounded-2xl">
      <img
        className="w-[10px] md:w-[200px] rounded-xl"
        src={cart?.product_image}
        alt=""
      />
      <div className="flex flex-col text-left w-full gap-4">
        <h4 className="text-lg font-bold text-secondary">
          {cart?.product_title}
        </h4>
        <p className="text-text">{cart?.description}</p>
        <p>{cart?.price}</p>
      </div>
      <div onClick={() => removeToCart(cart)} className="w-[100px]">
        <button className="text-red-500 p-4 border duration-300 hover:bg-red-500 hover:text-white border-red-500 rounded-full flex justify-center items-center">
          <FaXmark />
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  cart: PropTypes.object,
};

export default CartItem;
