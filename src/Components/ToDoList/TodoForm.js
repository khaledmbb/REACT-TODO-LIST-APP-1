import React, { memo } from "react";

const TodoForm = ({ taskTitle, setTask, addTask }) => {
  return (
    <form className="setTasks" onSubmit={addTask}>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={taskTitle}
        placeholder="Type Your New Task"
      />
      <input type="submit" value="Add Task" />
    </form>
  );
};

export default memo(TodoForm);
