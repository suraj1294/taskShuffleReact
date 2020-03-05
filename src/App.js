import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board';
import Controls from './Controls'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      tasklist : [
        {taskname : "task 0" , taskStage : 1},
        {taskname : "task 1" , taskStage : 1},
        {taskname : "task 2" , taskStage : 1},
        {taskname : "task 3" , taskStage : 1},
        {taskname : "task 4" , taskStage : 2},
        {taskname : "task 5" , taskStage : 2},
        {taskname : "task 6" , taskStage : 3},
        {taskname : "task 7" , taskStage : 3},
        {taskname : "task 8" , taskStage : 4},
        {taskname : "task 9" , taskStage : 4},
      ],
      selectedTask :{ 
        taskname:'',
        taskStage:0
      }
    }

  }

  getSelectedTsk = (task) => {
    if(task){
      this.setState({ selectedTask:task })
    }
  }

  shuffleTask = (stage, changeStage) => {
    console.log(stage, changeStage);
    const updatedTaskList = this.state.tasklist.map( task => { 
      if( task.taskname === this.state.selectedTask.taskname  ){
         task.taskStage = changeStage
      }   
      return task;    
     })

     this.setState({
       tasklist:updatedTaskList,
       selectedTask :{ 
        taskname:'',
        taskStage:0
      }
     })

   
  }

  render(){
      return (
        <div className="">                 
          <Controls
           selectedTask={this.state.selectedTask}
           shuffleTask = { (stage, changeStage) => this.shuffleTask(stage, changeStage) }
           />
          <Board 
          tasklist={this.state.tasklist}
          getSelectedTask = { (name)=> this.getSelectedTsk(name)}          
          />
          <pre>Selected Task:{ this.state.selectedTask.taskname }</pre>
          <pre>Selected taskStage:{ this.state.selectedTask.taskStage }</pre>
        </div>
      );
  }
}

export default App;
