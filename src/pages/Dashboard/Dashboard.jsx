import { useContext, useState } from "react";
import ProductContext from "../../components/context/ProductContext";
import Cart from "./cart/Cart";
import WhichList from "./wish-list/WhichList";

const Dashboard = () => {
  // const products = useLoaderData();
  const { cartItem, wishItem, totalCart } = useContext(ProductContext);
  const [activeCart, setActiveCart] = useState(true);
  const [activeWhish, setActiveWhish] = useState(false);
  const handleActiveCard = () => {
    setActiveCart(true);
    setActiveWhish(false);
  };
  const handleActiveWish = () => {
    setActiveCart(false);
    setActiveWhish(true);
  };
  console.log(cartItem);
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
        <h4 className="title">{activeCart ? "Cart" : "Wishlist"}</h4>
        <div>
          <h4 className="title">Total cost: $ {totalCart.toFixed(2)}</h4>
        </div>
      </div>
      <div className="container">
        <div className={activeCart ? "block" : "hidden"}>
          <Cart carts={cartItem} />
        </div>
        <div className={activeWhish ? "block" : "hidden"}>
          <WhichList wishes={wishItem} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
