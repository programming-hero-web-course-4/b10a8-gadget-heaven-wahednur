import PropTypes from "prop-types";
import { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import ProductContext from "../../../../components/context/ProductContext";

const WishItem = ({ wish }) => {
  const { removeToWish } = useContext(ProductContext);
  return (
    <div className="flex items-center justify-between gap-6 p-6 bg-white rounded-2xl">
      <img
        className="w-[10px] md:w-[200px] rounded-xl"
        src={wish?.product_image}
        alt=""
      />
      <div className="flex flex-col text-left w-full gap-4">
        <h4 className="text-lg font-bold text-secondary">
          {wish?.product_title}
        </h4>
        <p className="text-text">{wish?.description}</p>
        <p>{wish?.price}</p>
      </div>
      <div className="w-[100px]">
        <button
          onClick={() => removeToWish(wish)}
          className="text-red-500 p-4 border duration-300 hover:bg-red-500 hover:text-white border-red-500 rounded-full flex justify-center items-center"
        >
          <FaXmark />
        </button>
      </div>
    </div>
  );
};

WishItem.propTypes = {
  wish: PropTypes.object,
};

export default WishItem;
