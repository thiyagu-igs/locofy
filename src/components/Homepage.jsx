import { memo } from "react";
import PropTypes from "prop-types";
import "./Homepage.scss";

const Homepage = memo(({ className = "" }) => {
  return <div className="homepage" />;
});

Homepage.propTypes = {
  className: PropTypes.string,
};

export default Homepage;
