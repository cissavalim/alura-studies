import React from "react";
import Button from "../Button";
import style from './Form.module.scss';
import { ITask } from "../../types/task";

class Form extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
  state = {
    name: "",
    time: "00:00:00"
  }

  saveTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.setTasks(oldTasks => [...oldTasks, { ...this.state }])
  }

  render() {
    return <form className={style.novaTarefa} onSubmit={this.saveTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">
          Add a new study
        </label>
        <input
          type="text"
          name="task"
          id="task"
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
          placeholder="What do you want to study?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">
          Time
        </label>
        <input
          type="time"
          step="1"
          name="time"
          value={this.state.time}
          onChange={event => this.setState({ time: event.target.value })}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">
        Add
      </Button>
    </form>
  }
}

export default Form;