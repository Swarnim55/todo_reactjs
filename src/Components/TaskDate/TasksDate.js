import React from 'react';
import './TasksDate.css';
const TasksDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div className="date_main">
      <div className="date_day"> {day}</div>
      <div className="date_month"> {month}</div>
      <div className="date_year"> {year}</div>
    </div>
  );
};

export default TasksDate;
