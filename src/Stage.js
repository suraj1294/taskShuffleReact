import React from 'react';
import Task from './Task';

function Stage(props){
  console.log(props.stage);
    return(
        <div className="stagebox">
          <div>Stage: { props.stage }</div>
          {
           props.tasklist.map((task)=>              
                  <Task 
                  task ={ task }
                  key= { task.taskName }
                  />
           )
          }
        </div>
    )
}

export default Stage;