import React from 'react';
import Card from './Components/UI/Card';
import TasksItems from './TasksItems';

const Tasks = (props) => {
  return (
    <>
      <Card>
        {props.list.map((ele) => {
          return (
            <TasksItems
              task={ele.task}
              date={ele.date}
              key={ele.id}
              stime={ele.startTime}
              etime={ele.endTime}
              status={ele.status}
            />
          );
        })}
      </Card>
    </>
  );
};

export default Tasks;
