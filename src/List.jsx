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
    this.updateTask = this.updateTask.bind(this);
  }

  updateTask(e) {
    let state;
    if (e.type === "submit") {
      e.preventDefault();
      let newTask = this.refs.newTask.value;
      state = this.state.tasks;
      state[newTask] = { done: false };
    } else {
      console.log(e);
    }
    this.setState({
      tasks: state
    });
    console.log(this.state.tasks);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.updateTask}>
          <input type="text" ref="newTask" />
          <input type="submit" value="Add" />
        </form>
        <ul>
          {Object.keys(this.state.tasks).map((key, index) => (
            <li>
              {" "}
              {key}
              <label onClick={this.updateTask}>DELETAR</label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
