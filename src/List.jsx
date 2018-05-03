import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {
        correr: { done: false },
        pular: { done: false },
        comer: { done: false }
      }
    };
  }

  addTask(e) {
    e.preventDefault();
    let newTask = this.refs.newTask.value;
    let state = this.state.tasks;
    state[newTask] = { done: false };

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
    console.log(this.state.tasks);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTask.bind(this)}>
          <input type="text" ref="newTask" />
          <input type="submit" value="Add" />
        </form>
        <ul>
          {Object.keys(this.state.tasks).map(task => (
            <li ref="task">
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
