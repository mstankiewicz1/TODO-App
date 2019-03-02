import React from 'react';

const Task = (props) => {


    const {text} = props.task;

    return (
        <div>
            <strong>{text}</strong>
        </div>
    )
};

export default Task;