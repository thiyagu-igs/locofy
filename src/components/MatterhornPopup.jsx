import { memo } from "react";
import PropTypes from "prop-types";
import "./MatterhornPopup.scss";

const MatterhornPopup = memo(({ className = "", onClose }) => {
  return <div className="matterhorn-popup" />;
});

MatterhornPopup.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default MatterhornPopup;
