import React from "react";
import "./css/index.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {
        correr: false,
        pular: false,
        comer: false
      }
    };
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
    let tasks = this.state.tasks;
    delete tasks[task];

    this.setState({
      tasks: tasks
    });
  }
  changeStatus(task) {
    let state = this.state.tasks;
    let newValue = (state[task] = !state[task]);
    this.setState({
      tasks: newValue
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
        <ul>
          {Object.keys(this.state.tasks).map(task => (
            <li
              style={{ textDecoration: task.value ? "underline" : "none" }}
              ref="task"
              onClick={this.changeStatus.bind(this, task)}
            >
              {task}
              <button onClick={this.removeTask.bind(this, task)}>
                DELETAR
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
