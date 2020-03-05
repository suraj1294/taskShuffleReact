import React from "react";

const Context = React.createContext();

const initilaState = {
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

const reducer = (state, action) => {
    switch(action.type){
        case 'SELECT_TASK':
            return {
                ...state,
                selectedTask:action.payload
            }
        case 'MOVE_TASK_BK':
            return {...state,
                tasklist:state.tasklist.map( task => { 
                    if(task.taskname === state.selectedTask.taskname)
                        task.taskStage = task.taskStage -1;
                        return task 
                 })
            }

        case 'MOVE_TASK_FW':
        return  {...state,
            tasklist:state.tasklist.map( task => { 
                if(task.taskname === state.selectedTask.taskname)
                    task.taskStage = task.taskStage + 1;
                    return task 
             })
        } 

        default:
            return state
    }
}


const Provider =  ({ children }) => {
 const [ state, dispatch ]  = React.useReducer(reducer,initilaState)  
    return (
        <Context.Provider value={{ state, dispatch }} >
            { children }
        </Context.Provider>
   )
}

export { Context, Provider }