import { memo } from "react";
import PropTypes from "prop-types";
import "./ResultsPage.scss";

const ResultsPage = memo(({ className = "" }) => {
  return <div className="results-page" />;
});

ResultsPage.propTypes = {
  className: PropTypes.string,
};

export default ResultsPage;
