import React from 'react';


const ClearAllTasks = (props) => {


    return (
        <div>
            <button onClick={props.clear}>Clear</button>
        </div>
    )
};

export default ClearAllTasks;