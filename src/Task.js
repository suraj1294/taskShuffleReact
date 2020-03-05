import React from 'react';

function Task(props) {
    const { task } = props;
    return(
        <div className="task" onClick={ () => props.getSelectedTask(task) } >{task.taskname}</div>
    );
}

export default Task;