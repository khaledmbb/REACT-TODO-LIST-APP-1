import React, { useState } from "react";
import SettingTasks from "./SettingTasks";
import TodoForm from "./TodoForm";
import UpdateData from "./UpdateData";

const ToDoList = () => {
  const [todo, setToDo] = useState([
    { id: 1, title: "Task One", status: true },
    { id: 2, title: "Task Two 2", status: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const [updateData, setUpdateData] = useState({});

  const [error, setError] = useState("");

  const addNewTask = (e) => {
    e.preventDefault();
    if (newTask) {
      let newTid = todo.length + 1;
      let newT = { id: newTid, title: newTask, status: false };
      setToDo([...todo, newT]);
      setNewTask("");
    } else {
      setError("Please Enter A valid Task");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  function handleDelete(idWillDelete) {
    const filteredTasks = todo.filter(({ id }) => id !== idWillDelete);
    setToDo(filteredTasks);
  }
  function handleUpdate({ id, title, status }) {
    setUpdateData({ id, title, status });
  }

  function handleDone(idx) {
    const toggleDoneT = todo.map((task) => {
      if (task.id === idx) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(toggleDoneT);
  }

  const cancelUpdate = () => {
    setUpdateData({ id: null, title: "", status: null });
    console.log(updateData);
  };

  const changeTask = (e) => {
    const changedData = {
      id: updateData.id,
      title: e,
      status: updateData.status,
    };
    setUpdateData(changedData);
  };

  const updateT = (e) => {
    e.preventDefault();
    const changedTodo = todo.map((task) => {
      if (task.id === updateData.id) {
        return { ...task, title: updateData.title };
      }
      return task;
    });
    setToDo(changedTodo);
    setUpdateData({ id: null, title: "", status: null });
  };

  return (
    <div className="todo-list">
      <div className="container">
        <h1>React ToDo List App</h1>
        <div
          className="error"
          style={error ? { display: "block" } : { display: "none" }}
        >
          <p>{error}</p>
        </div>
        {updateData.title ? (
          <UpdateData
            updateData={updateData}
            changeTask={changeTask}
            handleSubmit={updateT}
            cancelFun={cancelUpdate}
          />
        ) : null}
        <TodoForm
          taskTitle={newTask}
          setTask={setNewTask}
          addTask={addNewTask}
        />
        <SettingTasks
          tasks={todo}
          deleteTask={handleDelete}
          updateTask={handleUpdate}
          doneTask={handleDone}
        />
      </div>
    </div>
  );
};

export default ToDoList;
