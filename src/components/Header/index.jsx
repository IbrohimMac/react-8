import styles from "./header.module.css";
import { useState } from "react";
import addLogo from "../../assets/add.png";

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <h1>TODO</h1>

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Add"
          type="text"
          onChange={onChangeTitle}
          value={title}
          required
        />
        <button>
          <h3 className="Ad-h3">Add</h3>
          <img className="ad-img" src={addLogo} alt="" />
        </button>
      </form>
    </header>
  );
}
