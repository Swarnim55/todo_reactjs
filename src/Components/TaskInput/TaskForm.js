import React, { useState } from 'react';
import './TaskForm.css';
import Card from '../UI/Card';

const TaskForm = (props) => {
  const [newTask, setNewTask] = useState('');
  const [newDate, setNewDate] = useState('2023,1,1');
  const [newSTime, setNewSTime] = useState('00:00');
  const [newETime, setNewETime] = useState('00:00');

  const taskEntryHandler = (event) => setNewTask(event.target.value);
  const dateEntryHandler = (event) => setNewDate(event.target.value);
  const stimeEntryHandler = (event) => setNewSTime(event.target.value);
  const etimeEntryHandler = (event) => setNewETime(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTask = {
      id: Math.random().toString(),
      task: newTask,
      date: new Date(newDate),
      startTime: newSTime,
      endTime: newETime,
      status: 'false',
    };
    props.onSaveTaskForm(enteredTask);
    setNewTask('');
    setNewDate('');
    setNewSTime('00:00');
    setNewETime('00:00');
  };
  return (
    <div>
      <Card>
        <form className="task-form" onSubmit={submitHandler}>
          <div className="text-input">
            <label> Task / Job: </label>
            <input type="text" onChange={taskEntryHandler} value={newTask} />
          </div>
          <div className="date-input">
            <label> Date: </label>
            <input type="date" onChange={dateEntryHandler} value={newDate} />
          </div>
          <div className="time-input">
            <label>Start Time: </label>
            <input type="time" onChange={stimeEntryHandler} value={newSTime} />
          </div>
          <div className="time-input">
            <label>End Time: </label>
            <input type="time" onChange={etimeEntryHandler} value={newETime} />
          </div>
          <button type="submit" className="task-btn ">
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
};

export default TaskForm;
