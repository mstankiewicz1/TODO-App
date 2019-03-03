import React from 'react';

const Task = (props) => {


    const {text, number} = props.task;

    return (
        <div>
            <em className="singleNumber">{number + '. '}</em><strong className="singleTask">{text}</strong>
        </div>
    )
};

export default Task;