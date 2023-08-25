import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ previousOperand, currentOperand }) => (
  <div className="output">
    <div className="previous-operand">{previousOperand}</div>
    <div className="current-operand">{currentOperand}</div>
  </div>
);

Results.propTypes = {
  previousOperand: PropTypes.string.isRequired,
  currentOperand: PropTypes.string.isRequired,
};

export default Results;
