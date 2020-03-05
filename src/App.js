import React from 'react';
import './App.css';
import Board from './Board';
import Controls from './Controls';
import { Context } from "./context";

const App = () => {
  
  const { state } = React.useContext(Context);

  return (
        <div className="">                 
          <Controls
           selectedTask={state.selectedTask}
           />
          <Board 
          tasklist={state.tasklist}
          />
          <pre>Selected Task:{ state.selectedTask.taskname }</pre>
          <pre>Selected taskStage:{ state.selectedTask.taskStage }</pre>
        </div>
      );
  
}

export default App;
