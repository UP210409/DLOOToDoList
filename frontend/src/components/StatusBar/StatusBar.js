import React from 'react';
import PropTypes from 'prop-types';
import './StatusBar.css';

const StatusBar = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <button
        onClick={props.newObjectFunction}>
        +
      </button>
    </div>
  );
}

StatusBar.propTypes = {
  title: PropTypes.string.isRequired,
  newObjectFunction: PropTypes.any.isRequired
}

export default StatusBar;