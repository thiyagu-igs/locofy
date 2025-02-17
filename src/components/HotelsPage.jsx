import { memo } from "react";
import PropTypes from "prop-types";
import "./HotelsPage.scss";

const HotelsPage = memo(({ className = "" }) => {
  return <div className="hotels-page" />;
});

HotelsPage.propTypes = {
  className: PropTypes.string,
};

export default HotelsPage;
