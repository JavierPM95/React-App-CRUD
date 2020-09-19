import React from 'react';


class Task extends React.Component {
    
    StyleComplete() {
        return {
            color: this.props.task.done ? 'grey' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none',
            backgroundColor: this.props.task.done ? '#b5e7a0' : '#eca1a6'
        }
    }

    render() {

        const {task} = this.props;

        return <div className="taskElement" style={this.StyleComplete()}>
            {task.title} -
            {task.description} -
            {task.done} -
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone} />
            <button style={btnDelete} onClick={this.props.deleteTask}>
                X
            </button>
        </div>
    }
}

const btnDelete = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    fontSize: '16px',
    cursor: 'pointer'
}

export default Task;