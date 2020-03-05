import React from 'react';
import { Context } from "./context";

function Task(props) {
    const { dispatch } = React.useContext(Context);
    const { task } = props;
    return(
        <div className="task" onClick={ () =>  dispatch({type:'SELECT_TASK', payload:task  })} >{task.taskname}</div>
    );
}

export default Task;