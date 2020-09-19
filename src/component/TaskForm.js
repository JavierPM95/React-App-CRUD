import React from 'react';

class TaskForm extends React.Component {

  state = {
    title: '',
    description: '',
  }

  onSubmit = (e) => {
    this.props.addTask(this.state.title, this.state.description)
    e.preventDefault();
  }

  onChange = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  render() {

      return (
      <form onSubmit={this.onSubmit}>
        <input 
          name="title"
          type="text"
          placeholder="Title task"
          onChange={this.onChange}
          value={this.state.title}
          />
        <br/>
        <br/>
        <textarea 
          name="description"
          placeholder="Description task"
          onChange={this.onChange}
          value={this.state.description}>
        </textarea>
        <br/>
        <button type="submit"> Save task </button>
      </form>
      )}
}


export default TaskForm;