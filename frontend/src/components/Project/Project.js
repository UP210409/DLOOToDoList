import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

const Proyect = (props) => {
  
  return (
    <div className="project">
      <p>PROJECT</p>
    </div>
  );
}

Album.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
}

export default Project;