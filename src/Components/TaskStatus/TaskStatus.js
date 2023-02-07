import React from 'react';
import './TaskStatus.css';
const TaskStatus = (props) => {
  let status = props.tstat;

  return (
    <div className="status-main">
      {status === 'true' ? (
        <input type="checkbox" className="checkbox-true" defaultChecked />
      ) : (
        <input type="checkbox" className="checkbox-false" />
      )}
    </div>
  );
};

export default TaskStatus;
