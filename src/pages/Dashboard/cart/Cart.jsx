import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = ({ carts }) => {
  console.log(carts);
  return (
    <div className="container">
      <div className="flex flex-col gap-6 mb-14">
        {carts.length <= 0 && (
          <div className="text-center flex flex-col justify-center items-center bg-white rounded-2xl h-[500px]">
            <img src="/empty-cart.png" alt="" />
            <Link
              className="btn bg-primary hover:bg-secondary duration-300 text-white"
              to={"/"}
            >
              Go to home page{" "}
            </Link>
          </div>
        )}
        {carts.map((cart) => (
          <CartItem key={cart.product_id} cart={cart} />
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  carts: PropTypes.array,
};

export default Cart;
