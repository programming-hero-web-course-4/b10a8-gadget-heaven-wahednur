import { Helmet } from "react-helmet-async";
import Products from "../../components/products/Products";

const Shop = () => {
  return (
    <div>
      <Helmet>
        <title>Shop | GadgetHaven</title>
      </Helmet>
      <div className="bg-primary py-8">
        <div className="flex justify-center flex-col items-center container space-y-6">
          <h1 className="sec-title text-white">Shop</h1>
          <p className="text-white w-[calc(100%-8px)] mx-auto text-center md:w-[calc(100%-160px)] lg:w-[796px]">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="container mt-10">
        <Products />
      </div>
    </div>
  );
};

export default Shop;
