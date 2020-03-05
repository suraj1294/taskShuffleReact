import React from 'react';
import { tsConstructSignatureDeclaration } from '@babel/types';

class Controls extends React.Component {
    constructor(props){
        super(props);
        this.shiftTaskToBack = this.shiftTaskToBack.bind(this);
        this.shiftTaskToNext = this.shiftTaskToNext.bind(this);

    }

    showHideForword(stage){
        return (stage===4)?true:false;
    }
    showHideBackword(stage){
        return (stage===1)?true:false;
    }
    shiftTaskToBack(stage){
        this.props.shuffleTask(stage, stage-1)
    }
    shiftTaskToNext(stage){
        this.props.shuffleTask(stage, stage+1)
    }
    render(){
        const { selectedTask:{ taskname, taskStage } } = this.props;
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
                    disabled = { this.showHideBackword(taskStage) }
                    className="marginLeft20"
                    onClick={this.shiftTaskToBack.bind(this, taskStage)}>Backword</button>
                    <button 
                    disabled = { this.showHideForword(taskStage) }
                    className="marginLeft20"
                    onClick={this.shiftTaskToNext.bind(this,taskStage)}>Forward</button>
                </div>
            </div>
        )
    }
}

export default Controls;