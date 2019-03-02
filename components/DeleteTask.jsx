import React from 'react';


const DeleteTask = (props) => {


    return (
        <div>
            <button onClick={props.delete}>Remove</button>
        </div>
    )
};

export default DeleteTask;