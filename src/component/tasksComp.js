import React from 'react';
import Task from './task';

class Taskscomp extends React.Component {
    render() {
        return this.props.tasks.map(task => 
        <Task 
        task = {task} 
        key={task.id}
        deleteTask={this.props.deleteTask.bind(this, task.id)}
        checkDone={this.props.checkDone.bind(this, task.id)}
        />)
    

    }
}

export default Taskscomp;