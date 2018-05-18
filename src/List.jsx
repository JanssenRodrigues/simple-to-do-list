import React from "react";
import FlipMove from "react-flip-move";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.renderTasks = this.renderTasks.bind(this);
  }

  renderTasks([item, value]) {
    return (
      <li
        key={item}
        ref="task"
        className={value === "done" ? "done" : "not-done"}
      >
        <span>{item}</span>
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
    let listTasks;
    if (this.props.filterBy === "all") {
      listTasks = Object.entries(todoTasks).map(this.renderTasks);
    } else {
      let filteredList = Object.entries(todoTasks)
        .filter(task => task[1] === this.props.filterBy)
        .reduce(
          (accumulator, value) => ({ ...accumulator, [value[0]]: value[1] }),
          {}
        );
      listTasks = Object.entries(filteredList).map(this.renderTasks);
    }

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
