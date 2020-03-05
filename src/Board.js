import React from 'react';
import Stage from './Stage'

function Board(props){
    const stageList =[...new Set(props.tasklist.map(task => task.taskStage))];
    console.log(stageList.sort());
    return (
      <div className="controlsbox bgCyan">
          <header className="controlsHeader">Task Board</header>
          <div className="stageFlex">
          {
           stageList.map((stage)=>{
              return(
                <Stage
                key={stage}
                stage={stage}
                tasklist={props.tasklist.filter(task => task.taskStage === stage )}
               />
               )
           })
          }
          </div>
      </div>  
    );
}

export default Board;