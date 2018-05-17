import React from "react";
import FlipMove from "react-flip-move";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.renderTasks = this.renderTasks.bind(this);
  }

  renderTasks([item, value]) {
    return (
      <li key={item} ref="task">
        <span style={{ textDecoration: value ? "line-through" : "none" }}>
          {item}
        </span>
        <button onClick={() => this.removeItem(item)}>DELETAR</button>
        <button onClick={() => this.changeItemStatus(item)}>
          MUDAR STATUS
        </button>
      </li>
    );
  }

  removeItem(item) {
    this.props.deleteTask(item);
  }

  changeItemStatus(item) {
    this.props.changeTaskStatus(item);
  }

  render() {
    let todoTasks = this.props.tasks;
    let listTasks = Object.entries(todoTasks).map(this.renderTasks);

    return (
      <ul>
        <FlipMove duration={300} easing="ease-out">
          {listTasks}
        </FlipMove>
      </ul>
    );
  }
}

export default List;
