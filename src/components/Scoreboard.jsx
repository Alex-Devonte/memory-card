import PropTypes from "prop-types";

Scoreboard.propTypes = {
  currentScore: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
};

function Scoreboard({ currentScore, bestScore }) {
  return (
    <div id="scoreboard">
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}

export default Scoreboard;
