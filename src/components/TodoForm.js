import { useState } from "react";

const ToDoForm = ({ handleAddTodo }) => {
    const [newTodo, setNewTodo] = useState("");
    
    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };
    const handleAddNewTodo = () =>{
            handleAddTodo(newTodo);
            setNewTodo('');
    };
    return (
        <div className="field">
            <input value={newTodo} onChange={handleChange} />
            <button
                className="btn btn--add"
                onClick={handleAddNewTodo}
                disabled={newTodo.length < 1}
            >
                Add
            </button>
        </div>
    );
};
export default ToDoForm;