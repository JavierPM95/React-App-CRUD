import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import tasks from './sample/Tasks.json';
import Taskscomp from './component/tasksComp';
import TaskForm from './component/TaskForm';
import Posts from './component/post';


/* function Helloworld(props) {
  return (
    <div id="content">
      <h3> {props.tittle} </h3>
      {props.subtittle}
    </div>
  )
} 

class Helloworld extends React.Component {
  
  state = {
    show: true
  }

  showhide = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show) {
      return (
        <div id="content">
        <h3> {this.props.tittle} </h3>
        {this.props.subtittle}
        <button class="button"  onClick={this.showhide} >Hide</button>
      </div>
      )  
    } else {
      return (<div>
        <button class="button" onClick={this.showhide}>Show content</button>
        </div>
      )
    }
  }
}

function App() {
  return (
    <div> <h1><b>This are the today's news!</b> </h1>
      <Helloworld tittle="tittle 1" subtittle="subttitle 1"/>
      <Helloworld tittle="tittle 2" subtittle="subttitle 3"/>
      <Helloworld tittle="tittle 3" subtittle="subttitle 3"/>
    </div>
    
  )
}
*/

class App extends React.Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }


  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks: newTasks})
  }


  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    })
    this.setState({task: newTasks})
  }

  render() {
    return <div>
      <Router>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Posts">Posts</Link>
        </div>
        <Route exact path="/" render={() => {
          return <div>
           <div className="taskform">
           <TaskForm addTask={this.addTask} /> 
            </div> 
            <div className="taskcomp">
              <Taskscomp tasks = {this.state.tasks} 
            deleteTask={this.deleteTask}
            checkDone={this.checkDone}
            />
            </div>
          </div>
        }}>
        </Route>
        <Route path="/posts" component={Posts} />
      </Router>
    </div>
    }
}


export default App;
