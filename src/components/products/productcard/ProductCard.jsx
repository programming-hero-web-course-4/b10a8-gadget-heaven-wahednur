import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="p-5 bg-white rounded-2xl flex flex-col gap-4">
      <img src={product.product_image} alt="" />
      <h4 className="title h-14 overflow-hidden">{product?.product_title}</h4>
      <p className="text-lg text-text">Price: {product?.price}</p>
      <Link
        className="text-primary px-[22px] py-[13px] rounded-full border border-primary flex items-center justify-center hover:bg-primary hover:text-white duration-300"
        to={`/product/${product?.product_id}`}
      >
        View Details
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;
