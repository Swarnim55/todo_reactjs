import React, { useState } from 'react';
import EndTime from './Components/TaskTime/EndTime';
import StartTime from './Components/TaskTime/StartTime';
import TasksDate from './Components/TaskDate/TasksDate';
import './TasksItems.css';
import TaskStatus from './Components/TaskStatus/TaskStatus';

const TasksItems = (props) => {
  const setColor = (val) => {
    let color;
    val == 'true' ? (color = 'darkgreen') : (color = 'black');
    return color;
  };
  const [bgColor, setBgColor] = useState(setColor(props.status));

  return (
    <div className="task-container" key={props.id}>
      <TasksDate date={props.date} />
      <StartTime stime={props.stime} />
      <div className="task-item" style={{ backgroundColor: bgColor }}>
        {props.task}
      </div>
      <EndTime etime={props.etime} />
      <TaskStatus tstat={props.status} />
    </div>
  );
};

export default TasksItems;
