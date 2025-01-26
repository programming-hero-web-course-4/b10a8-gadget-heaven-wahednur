import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import WishItem from "./wish-item/WishItem";

const WhichList = ({ wishes }) => {
  return (
    <div className="container mb-14">
      {wishes.length <= 0 && (
        <div className="flex justify-center flex-col items-center  bg-white space-y-6 py-10 rounded-2xl">
          <img className="rounded-2xl" src="/empy-wish.png" alt="" />
          <h2 className="title">Wish list is empty</h2>
          <Link
            className="btn bg-primary hover:bg-secondary duration-300 text-white"
            to="/"
          >
            Go to home
          </Link>
        </div>
      )}
      <div className="flex flex-col gap-6 mb-14">
        {wishes.map((wish) => (
          <WishItem key={wish.product_id} wish={wish} />
        ))}
      </div>
    </div>
  );
};

WhichList.propTypes = {
  wishes: PropTypes.array,
};

export default WhichList;
