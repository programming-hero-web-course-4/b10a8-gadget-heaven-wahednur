import axios from "axios";
import { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductCard from "./productcard/ProductCard";

// import "react-tabs/style/react-tabs.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`products.json`);
      setProducts(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1 className="big-title text-center text-secondary">
        Explore Cutting-Edge Gadgets
      </h1>
      <div className="container mt-10 ">
        <Tabs>
          <div className="flex flex-col md:flex-row gap-6">
            <TabList className="flex flex-col gap-6 w-full md:w-4/12 lg:w-3/12 bg-white p-6 rounded-2xl">
              <Tab>All</Tab>
              <Tab>Laptops</Tab>
              <Tab>Phones</Tab>
              <Tab>Accessories</Tab>
              <Tab>Smart Watch</Tab>
            </TabList>
            <div className="w-full md:w-8/12 lg:w-9/12">
              <TabPanel>
                {products.length <= 0 && (
                  <div className="w-full h-full bg-white p-6 rounded-2xl">
                    <img className="rounded-xl" src="/no-product.jpg" alt="" />
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.product_id} product={product} />
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                {products.filter((cat) => cat.category === "Laptops").length <=
                  0 && (
                  <div className="w-full h-full bg-white p-6 rounded-2xl">
                    <img className="rounded-xl" src="/no-product.jpg" alt="" />
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter((cat) => cat.category === "Laptops")
                    .map((product) => (
                      <ProductCard key={product.product_id} product={product} />
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                {products.filter((cat) => cat.category === "Phones").length <=
                  0 && (
                  <div className="w-full h-full bg-white p-6 rounded-2xl">
                    <img className="rounded-xl" src="/no-product.jpg" alt="" />
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter((cat) => cat.category === "Phones")
                    .map((product) => (
                      <ProductCard key={product.product_id} product={product} />
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                {products.filter((cat) => cat.category === "Accessories")
                  .length <= 0 && (
                  <div className="w-full h-full bg-white p-6 rounded-2xl">
                    <img className="rounded-xl" src="/no-product.jpg" alt="" />
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter((cat) => cat.category === "Accessories")
                    .map((product) => (
                      <ProductCard key={product.product_id} product={product} />
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                {products.filter((cat) => cat.category === "Smart Watch")
                  .length <= 0 && (
                  <div className="w-full h-full p-6 bg-white rounded-2xl">
                    <img className="rounded-xl" src="/no-product.jpg" alt="" />
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products
                    .filter((cat) => cat.category === "Smart Watch")
                    .map((product) => (
                      <ProductCard key={product.product_id} product={product} />
                    ))}
                </div>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Products;
