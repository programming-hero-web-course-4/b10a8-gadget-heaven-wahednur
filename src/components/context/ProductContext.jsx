import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [wishItem, setWishItem] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  const removeToCart = (product) => {
    setCartItem(
      cartItem.filter((item) => item.product_id !== product?.product_id)
    );
    setTotalCart(totalCart - product?.price);
  };

  const removeToWish = (product) => {
    setCartItem(
      setWishItem.filter((item) => item.product_id !== product?.product_id)
    );
  };

  const clearCart = () => {
    setCartItem([]);
    toast(
      <div className="flex flex-col items-center justify-center">
        <img src="/success.png" alt="" />
        <h1 className="title">Payment Successfully</h1>
        <hr />
        <p className="text-text">Thanks for purchasing.</p>
        <p>Total : {totalCart.toFixed(2)}</p>
      </div>
    );
  };
  const productInfo = {
    cartItem,
    setCartItem,
    wishItem,
    setWishItem,
    totalCart,
    setTotalCart,
    removeToCart,
    removeToWish,
    clearCart,
  };
  return (
    <ProductContext.Provider value={productInfo}>
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node,
};

export default ProductContext;
