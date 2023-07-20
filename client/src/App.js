import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";
import axios from "axios";
import { BiMessageAltAdd } from "react-icons/bi";
import { AiTwotoneEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, addTask, updateTask } from "./slice";

function App() {
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const dispatch = useDispatch();
  const Tasks = useSelector((state) => state.crud.tasks);
  // console.log(Tasks);

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/tasks").then((res) => {
      // console.log(res.data);

      dispatch(getTasks(res.data));
    });
  }, [updateUI]);

  const addTask1 = () => {
    axios
      .post("http://localhost:5000/api/v1/task", { task: input })
      .then((res) => {
        // console.log(res.data);
        setInput("");
        setUpdateUI((prev) => !prev);
        dispatch(addTask(res.data));
      });
  };

  const updateMode = (id, text) => {
    // console.log(text);
    setInput(text);
    setUpdateId(id);
  };

  const updateTask1 = () => {
    axios
      .put(`http://localhost:5000/api/v1/task/${updateId}`, { task: input })
      .then((res) => {
        console.log(res.data);
        dispatch(updateTask({ id: updateId, task: input }));
        setUpdateUI((prev) => !prev);
        setUpdateId(null);
        setInput("");
      });
  };
  return (
    <div className="app">
      <h1>To Do List</h1>
      <div className="inputHolder">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={updateId ? updateTask1 : addTask1}>
          {updateId ? <AiTwotoneEdit /> : <BiMessageAltAdd />}
        </button>
      </div>

      <ul>
        {Tasks.map((task) => (
          <List
            task={task.task}
            key={task._id}
            id={task._id}
            setUpdateUI={setUpdateUI}
            updateMode={updateMode}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
