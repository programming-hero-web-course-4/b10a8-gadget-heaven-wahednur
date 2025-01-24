import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1 className="big-title text-center text-secondary">
        Explore Cutting-Edge Gadgets
        <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-10 lg:mt-12">
          <div className="w-full md:w-4/12 lg:w-3/12">
            <div className="bg-white p-6 rounded-2xl">
              <NavLink to="" className="menu-btn">
                All product
              </NavLink>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-8/12 lg:w-9/12">
            <div className="p-5 bg-white rounded-2xl w-full aspect-[4/3]"></div>
            <div className="p-5 bg-white rounded-2xl w-full aspect-[4/3]"></div>
            <div className="p-5 bg-white rounded-2xl w-full aspect-[4/3]"></div>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default Products;
