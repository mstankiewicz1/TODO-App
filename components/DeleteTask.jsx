import React from 'react';


const DeleteTask = (props) => {


    return (
        <div>
            <button className="removeButton" onClick={props.delete}>Remove</button>
        </div>
    )
};

export default DeleteTask;