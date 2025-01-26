import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaRegHeart, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { PiShoppingCartLight } from "react-icons/pi";
import { useLoaderData, useParams } from "react-router-dom";
import ProductContext from "../../context/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const product = data.find((product) => product.product_id === id);
  const {
    cartItem,
    setCartItem,
    wishItem,
    setWishItem,
    totalCart,
    setTotalCart,
  } = useContext(ProductContext);

  const ratingStars = (rating) => {
    // const stars = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => {
      if (rating > i + 1) {
        return <FaStar key={i} className="text-yellow-500" />;
      } else if (rating >= i + 0.5) {
        return <FaStarHalfStroke key={i} className="text-yellow-500" />;
      } else {
        return <FaStar key={i} className="text-gray-500" />;
      }
    });
  };
  const addToCart = (product) => {
    setCartItem([...cartItem, product]);
    const total = Number(totalCart);
    setTotalCart(total + product?.price);
  };

  const disableAddToCart = (product) => {
    if (product?.availability === "Out of Stock") {
      return true;
    }
  };
  // disable wishlist button
  const disableWishListBtn = (product) => {
    if (
      wishItem.includes(product) ||
      product?.availability === "Out of Stock"
    ) {
      return true;
    }
  };
  return (
    <div>
      <Helmet>
        <title>{product?.product_title} | GadgetHaven</title>
      </Helmet>
      <div className="bg-primary h-[400px] flex flex-col items-center py-8 gap-6 ">
        <h1 className="sec-title  text-white">Product Details</h1>
        <p className="text-white w-[calc(100%-8px)] mx-auto text-center md:w-[calc(100%-160px)] lg:w-[796px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className=" container relative h-[850px] md:h-[570px]">
        <div className="w-full absolute px-6 py-12 rounded-2xl bg-white -top-32">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-4/12">
              <img src={product?.product_image} className="rounded-xl" alt="" />
            </div>
            <div className="w-full md:w-8/12 text-text">
              <div className="flex flex-col space-y-5">
                <h2 className="title">{product.product_title}</h2>
                <p className="text-text font-semibold">
                  Price: $ {product?.price}
                </p>
                <p>
                  <span
                    className={`border ${
                      product?.availability === "In Stock"
                        ? "border-green-500 text-green-500"
                        : "border-red-500 text-red-500"
                    }  px-4 py-2 rounded-full`}
                  >
                    {product?.availability}
                  </span>
                </p>
                <p>{product?.description}</p>
                <p className="font-bold text-secondary">Specification:</p>
                <ol className="list-decimal list-inside space-y-1.5">
                  {product?.specification.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))}
                </ol>
                <p className="text-secondary font-bold flex items-center gap-1">
                  Rating <FaStar className="text-yellow-500" />
                </p>
                <p className="text-xl flex items-center">
                  {ratingStars(product?.rating)}
                  <span className="bg-gray-100 px-5 py-2 rounded-full text-base font-semibold ml-1.5">
                    ({product?.rating})
                  </span>
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <button
                    onClick={() => addToCart(product)}
                    className={`btn gap-1 duration-300 ${
                      disableAddToCart(product)
                        ? "hover:disabled: bg-gray-300 text-text cursor-not-allowed"
                        : "hover:bg-secondary bg-primary text-white"
                    } `}
                    disabled={disableAddToCart(product)}
                  >
                    Add To Cart <PiShoppingCartLight />
                  </button>
                  <button
                    onClick={() => setWishItem([...wishItem, product])}
                    disabled={disableWishListBtn(product)}
                    className={`border border-gray-400 p-4 rounded-full text-xl duration-300  ${
                      disableWishListBtn(product)
                        ? "cursor-not-allowed bg-gray-300 text-text hover:disabled:bg-gray-300"
                        : "hover:bg-primary hover:text-white cursor-pointer"
                    }`}
                  >
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
