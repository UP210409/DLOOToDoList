import React from 'react';
import PropTypes from 'prop-types';
import { WithLightbox } from '../Common';
const Task = (props) => {
  const { task } = props;
  return (
    <div className='task'>
		<p>TASK</p>
    </div>
  );
}
Task.propTypes = {
  TaskName: PropTypes.string.isRequired,
  TaskDescription: PropTypes.string.isRequired,
  TaskDate: PropTypes.string.isRequired,
  TaskProject: PropTypes.string.isRequired,
  TaskResponsible: PropTypes.array.isRequired,
}
export default Task;