import React from 'react';
import Task from './Task.jsx';

const TaskList = (props) => {


        const currentTasks = props.tasks.map(task =>
            <Task
                key={task.id}
                number={task.number}
                task={task}
                delete={props.delete}
            />
        );


        return (
            <div>
                <h2>Lista zadań</h2>
                {currentTasks.length > 0 ? currentTasks : <p>Brak zadań do zrobienia</p>}
            </div>
        )
    };

export default TaskList;