import React from 'react';


const ClearAllTasks = (props) => {


    return (
        <div>
            <button className="clearButton" onClick={props.clear}>Clear</button>
        </div>
    )
};

export default ClearAllTasks;