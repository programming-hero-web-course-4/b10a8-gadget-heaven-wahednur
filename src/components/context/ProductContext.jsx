import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const [wishItem, setWishItem] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  // Add to cart
  const addToCart = (product) => {
    setCartItem([...cartItem, product]);
    const total = Number(totalCart);
    setTotalCart(total + product?.price);
    toast.success(`${product?.product_title} added to cart successfully`);
  };

  // Add to wishlist
  const addToWish = (product) => {
    setWishItem([...wishItem, product]);
    toast.success(
      `${product?.product_title} added successfully in thw wishlist`
    );
  };
  // Remove to cart
  const removeToCart = (product) => {
    setCartItem(
      cartItem.filter((item) => item.product_id !== product?.product_id)
    );
    setTotalCart(totalCart - product?.price);
    toast.success("Cart item removed successfully");
  };

  // Add to wishlist
  const removeToWish = (product) => {
    setWishItem(
      wishItem.filter((item) => item.product_id !== product?.product_id)
    );
    toast.success("Wish item removed successfully");
  };

  // Clear cart
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

  // Passing context value
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
    addToCart,
    addToWish,
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
