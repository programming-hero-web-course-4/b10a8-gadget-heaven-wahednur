import { useContext, useState } from "react";
import ProductContext from "../../components/context/ProductContext";
import Cart from "./cart/Cart";
import WhichList from "./wish-list/WhichList";
import { IoOptionsOutline } from "react-icons/io5";

const Dashboard = () => {
  // const products = useLoaderData();
  const { cartItem, wishItem, totalCart } = useContext(ProductContext);
  const [activeCart, setActiveCart] = useState(true);
  const [activeWhish, setActiveWhish] = useState(false);
  const [sortedOrder, setSortedOrder] = useState("asc");
  const handleActiveCard = () => {
    setActiveCart(true);
    setActiveWhish(false);
  };
  const handleActiveWish = () => {
    setActiveCart(false);
    setActiveWhish(true);
  };

  const sortedCart = cartItem.sort((a, b) => {
    return sortedOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  const toggleSort = () => {
    setSortedOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <div>
      <div className="bg-primary py-8">
        <div className="flex justify-center flex-col items-center container space-y-6">
          <h1 className="sec-title text-white">Dashboard</h1>
          <p className="text-white w-[calc(100%-8px)] mx-auto text-center md:w-[calc(100%-160px)] lg:w-[796px]">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={handleActiveCard}
              className="px-6 py-3 rounded-full bg-white hover:border-secondary text-primary border-white border font-bold hover:bg-secondary duration-300"
            >
              Cart
            </button>
            <button
              onClick={handleActiveWish}
              className="px-6 py-3 rounded-full border hover:border-secondary border-white text-white font-bold hover:bg-secondary duration-300"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="container flex flex-col md:flex-row justify-between items-center py-4 mt-12">
        {activeCart ? (
          <>
            <h4 className="title">Cart</h4>
            <div className="flex items-center gap-6">
              <h4 className="title">Total cost: $ {totalCart.toFixed(2)}</h4>
              <button
                onClick={toggleSort}
                className="flex items-center duration-300 gap-2 border border-primary px-8 py-3 rounded-full hover:bg-primary duration-300 hover:text-white font-bold text-primary"
              >
                Shot by price <IoOptionsOutline className="-rotate-90" />
              </button>
              <button className="flex items-center bg-gradient-to-t from-primary to-purple-500 px-8 py-3 rounded-full hover:bg-primary duration-300 hover:bg-gradient-to-b hover:from-rose-400 hover:to-pink-500 transform font-bold text-white">
                Purchase
              </button>
            </div>
          </>
        ) : (
          <>
            <h4 className="title">Wishlist</h4>
          </>
        )}
      </div>
      <div className="container">
        <div className={activeCart ? "block" : "hidden"}>
          <Cart carts={sortedCart} />
        </div>
        <div className={activeWhish ? "block" : "hidden"}>
          <WhichList wishes={wishItem} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
