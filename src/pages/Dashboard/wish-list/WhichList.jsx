import PropTypes from "prop-types";

const WhichList = ({ wishes }) => {
  return <div>Wishes{wishes.length}</div>;
};

WhichList.propTypes = {
  wishes: PropTypes.array,
};

export default WhichList;
