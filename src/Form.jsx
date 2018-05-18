import React from "react";
import List from "./List";
import "./css/index.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {
        correr: "done",
        pular: "not done",
        comer: "not done"
      },
      filter: "all"
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
    state[newTask] = "not done";

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
    state[task] = state[task] === "done" ? "not done" : "done";
    this.setState({
      tasks: state
    });
  }

  filterStatus(e) {
    this.setState({
      filter: e.target.value
    });
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
          <select
            onChange={this.filterStatus.bind(this)}
            ref={input => (this.menu = input)}
          >
            <option value="all">Todas</option>
            <option value="done">Feitas</option>
            <option value="not done">Não Feitas</option>
          </select>
        </form>
        <List
          tasks={this.state.tasks}
          filterBy={this.state.filter}
          deleteTask={this.removeTask}
          changeTaskStatus={this.changeStatus}
        />
      </div>
    );
  }
}

export default Form;
