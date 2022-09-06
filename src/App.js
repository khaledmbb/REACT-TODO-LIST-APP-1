import React from "react";
import "../src/Styles/main.scss";
import NavBar from "../src/Components/NavBar/NavBar";
import ToDoList from "../src/Components/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ToDoList />
    </div>
  );
}

export default App;
