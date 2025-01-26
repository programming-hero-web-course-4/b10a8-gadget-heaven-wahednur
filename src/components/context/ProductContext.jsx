import PropTypes from "prop-types";
import { createContext, useState } from "react";
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
  const productInfo = {
    cartItem,
    setCartItem,
    wishItem,
    setWishItem,
    totalCart,
    setTotalCart,
    removeToCart,
    removeToWish,
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
