import PropTypes from 'prop-types';

export const gamePropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  country: PropTypes.string,
  date: PropTypes.string,
  league: PropTypes.string,
  homeTeam: PropTypes.string,
  awayTeam: PropTypes.string,
}).isRequired;

export const matchTablePropTypes = {
  games: PropTypes.arrayOf(gamePropTypes).isRequired,
};

export const predictionFormPropTypes = {
  gameID: PropTypes.string.isRequired,
};

export const predictedScorePropTypes = {
  htscore: PropTypes.string.isRequired,
  atscore: PropTypes.string.isRequired,
};