import React, { useEffect, useState } from "react";
import Overview from "./components/Overview";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState([]);

  function updateTaskList(task) {
    let curr = taskList;
    curr.push(task);
    setTaskList(curr);
    Overview(taskList);
  }

  function renderTasks() {
    if(taskList.length > 0) {
      return (
        taskList.map((task1, idx) => (<Overview task={task1} />))
      )
    }
  }

  useEffect(() => {}, [taskList])

  return (
    <div className="App">
      <div>
        <label htmlFor="taskBox">Add Task</label>
        <input name="taskBox" type="text" onChange={(e) => setTask(e.target.value)}/>

        <button onClick={() => updateTaskList(task)}>Submit</button>
      </div>
      {renderTasks()}
    </div>
  );
}

export default App;
