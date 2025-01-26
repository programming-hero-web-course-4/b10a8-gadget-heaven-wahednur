import PropTypes from "prop-types";
import { createContext, useState } from "react";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const { wishItem, setWishItem } = useState([]);
  const productInfo = {
    cartItem,
    setCartItem,
    wishItem,
    setWishItem,
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
