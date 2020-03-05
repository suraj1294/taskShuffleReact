import React from 'react';
import { Context } from "./context";

const Controls = (props) => {

    const { dispatch  } = React.useContext(Context)
        const { selectedTask:{ taskname, taskStage } } = props;

   function showHideForword(stage){
        return (stage===4)?true:false;
    }
    function showHideBackword(stage){
        return (stage===1)?true:false;
    }
    
        return(
            <div className="bgCyan controlsbox">
                <header className="controlsHeader">Task Shuffle</header>
                <div>
                    <input
                    readOnly
                    value={taskname}
                    placeholder="Selected task"
                    />
                    <button 
                    disabled = { showHideBackword(taskStage) }
                    className="marginLeft20"
                    onClick={ () =>  dispatch({ type:'MOVE_TASK_BK' })  }>Backword</button>
                    <button 
                    disabled = { showHideForword(taskStage) }
                    className="marginLeft20"
                    onClick={ () =>  dispatch({ type:'MOVE_TASK_FW' })  }>Forward</button>
                </div>
            </div>
        )
    
}

export default Controls;