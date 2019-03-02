import React from 'react';
import Task from './Task.jsx';

const TaskList = (props) => {


        const currentTasks = props.tasks.map(task =>
            <Task
                key={task.id}
                task={task}
            />
        );


        return (
            <div>
                <h2>Lista zadań</h2>
                {currentTasks}
            </div>
        )
    };

export default TaskList;