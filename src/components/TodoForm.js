import { useState } from "react";

const ToDoForm = ({ addTodo }) => {
  
    const [newTodo, setNewTodo] = useState("");
    
    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };
    const handleAddTodo = () =>{
        if(addTodo !==''){
            addTodo(newTodo);
            setNewTodo('');
        }
    };
    return (
        <div className="field">
            <input value={newTodo} onChange={handleChange} />
            <button
                className="btn btn--add"
                onClick={handleAddTodo}
                disabled={newTodo.length < 1}
            >
                Add
            </button>
        </div>
    );
};
export default ToDoForm;