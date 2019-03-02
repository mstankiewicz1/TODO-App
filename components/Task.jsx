import React from 'react';

const Task = (props) => {


    const {text, number} = props.task;

    return (
        <div>
            <em>{number}</em><strong>{text}</strong>
        </div>
    )
};

export default Task;