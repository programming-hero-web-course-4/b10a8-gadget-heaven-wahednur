import { Helmet } from "react-helmet-async";
import Products from "../../components/products/Products";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Gadget | Gadget Heaven</title>
      </Helmet>
      <div className="relative  lg:aspect-banner -mt-20 z-0 font-sora bg-primary border-[7px] border-white rounded-4xl">
        <div className="container py-20 text-center">
          <div className="flex flex-col items-center space-y-6  text-white">
            <h1 className="mt-6 text-xl md:text-3xl lg:text-[56px] w-full md:w-[calc(100%-160px)] font-bold ">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="w-full md:w-[calc(100%-160px)] lg:w-[796px]">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="bg-white text-primary px-[30px] py-[15px] rounded-full text-xl font-bold hover:bg-secondary hover:text-white duration-300">
              Shop Now
            </button>
          </div>
          <div className="container flex flex-col items-center absolute mt-10 inset-y-[100%/2]  inset-x-auto">
            <div className="w-[calc(100%-40px)] lg:max-w-[1062px] rounded-4xl a p-6 border-[3px] border-white bg-white/30">
              <img
                className="rounded-3xl w-full object-cover object-center aspect-img "
                src="/banner.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 md:mt-[350px] lg:mt-[500px] xl:mt-[400px] 2xl:mt-10 py-10 md:py-16 lg:py-[100px]">
        <div className="container">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
