import React, { useState } from 'react';
import TaskForm from './Components/TaskInput/TaskForm';
import Tasks from './Tasks';

const DUMMY_LIST = [
  {
    id: 't1',
    task: 'Learn React',
    date: new Date(2023, 7, 2),
    startTime: '10:00',
    endTime: '12:00 ',
    status: 'false',
  },
  {
    id: 't2',
    task: 'Clean Room',
    date: new Date(2023, 7, 2),
    startTime: '19:00 ',
    endTime: '20:00 ',
    status: 'true',
  },
];

const App = () => {
  const [tasks, setTasks] = useState(DUMMY_LIST);

  const saveNewTaskEntry = (enteredNewTask) => {
    setTasks((prevTasks) => {
      return [enteredNewTask, ...prevTasks];
    });
    console.log(tasks);
  };
  return (
    <div>
      <TaskForm onSaveTaskForm={saveNewTaskEntry} />
      <Tasks list={tasks} />
    </div>
  );
};

export default App;
