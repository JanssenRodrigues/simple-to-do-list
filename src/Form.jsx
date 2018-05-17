import React from "react";
import List from "./List";
import "./css/index.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {
        correr: true,
        pular: false,
        comer: false
      }
    };
    this.removeTask = this.removeTask.bind(this);
    this.changeStatus = this.changeStatus.bind(this);
  }

  addTask(e) {
    e.preventDefault();
    if (this.refs.newTask.value === "") {
      return;
    }
    let newTask = this.refs.newTask.value;
    let state = this.state.tasks;
    state[newTask] = false;

    this.setState({
      tasks: state
    });
  }

  removeTask(task) {
    let newState = this.state.tasks;
    delete newState[task];
    this.setState({
      tasks: newState
    });
  }

  changeStatus(task) {
    let state = this.state.tasks;
    state[task] = !state[task];
    this.setState({
      tasks: state
    });
    console.log(this.state.tasks);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addTask.bind(this)}>
          <input
            type="text"
            placeholder="Digite uma nova tarefa"
            ref="newTask"
          />
          <input type="submit" value="Add" />
        </form>
        <List
          tasks={this.state.tasks}
          deleteTask={this.removeTask}
          changeTaskStatus={this.changeStatus}
        />
      </div>
    );
  }
}

export default Form;
