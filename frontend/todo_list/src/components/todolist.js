import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "../utils/handleapis";

const ToDoList = () => {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  const handleAddToDo = () => {
    addToDo(text, setText, setToDo);
  };

  const handleUpdateToDo = () => {
    updateToDo(toDoId, text, setToDo, setText, setIsUpdating);
  };

  const handleDeleteToDo = (_id) => {
    deleteToDo(_id, setToDo);
  };

  return (
    <div className="ToDoList">
      <h1>ToDo App</h1>
      <div className="top">
        <input
          type="text"
          placeholder="Add ToDos..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="add" onClick={isUpdating ? handleUpdateToDo : handleAddToDo}>
          {isUpdating ? "Update" : "Add"}
        </div>
      </div>
      <div className="list">
        {toDo.map((item) => (
          <ToDo
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteToDo={() => handleDeleteToDo(item._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
