import React from 'react';
import Task from './Task.jsx';

const TaskList = (props) => {

        const currentTasks = props.tasks.map(task =>
            <Task
                key={task.id}
                number={task.number}
                task={task}
                delete={props.delete}
                clear={props.clear}
            />
        );


        return (
            <div>
                <h2>Lista zadań</h2>
                <div className="taskList">
                    {currentTasks.length > 0 ? currentTasks : <p>Brak zadań do zrobienia</p>}
                </div>
            </div>
        )
    };

export default TaskList;