import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-10 md:py-16 lg:py-[100px]">
      <div className="container">
        <div className="flex flex-col items-center space-y-1">
          <h2 className="sec-title">Gadget Heaven</h2>
          <p className="text-text">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <hr className="my-8 text-secondary/60 opacity-60" />
        <div className="flex flex-col md:flex-row gap-8 lg:gap-20 xl:gap-[166px] justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h4 className="text-lg font-bold text-secondary">Services</h4>
            <Link className="text-text mt-2" to="/">
              Product Support
            </Link>
            <Link className="text-text" to="/">
              Order Tracking
            </Link>
            <Link className="text-text" to="/">
              Shipping & Delivery
            </Link>
            <Link className="text-text" to="/">
              Returns
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <h4 className="text-lg font-bold text-secondary">Company</h4>
            <Link className="text-text mt-2" to="/">
              About Us
            </Link>
            <Link className="text-text" to="/">
              Careers
            </Link>
            <Link className="text-text" to="/">
              Contact
            </Link>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <h4 className="text-lg font-bold text-secondary">Legal</h4>
            <Link className="text-text mt-2" to="/">
              Terms of Service
            </Link>
            <Link className="text-text" to="/">
              Privacy Policy
            </Link>
            <Link className="text-text" to="/">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
