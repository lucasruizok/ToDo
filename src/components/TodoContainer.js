import { useEffect, useState } from "react";
import ToDoItem from "./TodoItem";
import FilterButton from "./FilterButton";
import ToDoForm from "./TodoForm";

const initialData = [
    { id: 1, title: "Lorem ipsum dolor sit amet", completed: false },
    { id: 2, title: "Vivamus id arcu laoreet", completed: false },
    { id: 3, title: "Donec cursus mi", completed: true },
    { id: 4, title: "Aenean id fringilla justo", completed: false }
];
const ToDo = () => {
   
    const [filter, setFilter] = useState("all");
    const [todos, setTodos] = useState(initialData);
    const [doneCount, setDoneCount] = useState(0);

    const handleStatus = (item) => {
        const newTodos = [...todos];
        const newTodo = newTodos.find((todo) => { return todo.id === item.id });
        newTodo.completed = !newTodo.completed;
        setTodos(newTodos);
    };

    const count = () => {
        const newCount = todos.filter((item) => item.completed).length;
        setDoneCount(newCount);
    }
    useEffect(() => {
        count();
    }, [todos])

    const handleRemove = (item) => {
        setTodos([...todos].filter(todo => todo.id != item.id));
    };

    const addTodo = (newTodo) => {
        let newTodoItem = { id: +new Date(), title: newTodo, completed: false };
        setTodos([...todos, newTodoItem]);
    };

    const filterTodos = () => {
        let filterTodosList = todos.filter(todo => {
            if (filter === "complete") {
                return todo.completed === true;
            } else if (filter === "incomplete") {
                return todo.completed === false;
            } else {
                return todo;
            }
        })
        return filterTodosList;
    };
    const visibleTodos = filterTodos();

    return (
        <div>
            <h1>
                <strong>ToDo</strong> List
            </h1>
            <ToDoForm addTodo={addTodo}/>
            <div className="filter-wrapper">
                <div className="filter-tabs">
                    <FilterButton
                        activeFilter={filter}
                        filter="all"
                        onClick={() => setFilter("all")}
                    />
                    <FilterButton
                        activeFilter={filter}
                        filter="complete"
                        onClick={() => setFilter("complete")}
                    />
                    <FilterButton
                        activeFilter={filter}
                        filter="incomplete"
                        onClick={() => setFilter("incomplete")}
                    />
                </div>
                <p style={{ lineHeight: 1.5 }}>
                    {doneCount === todos.length
                        ? `🎉 ${doneCount}/${todos.length} all todos complete!`
                        : `${doneCount}/${todos.length} todos complete`}
                </p>
            </div>
            {visibleTodos.length === 0 && (
                <p style={{ paddingLeft: "1rem" }}>No todos to show here...</p>
            )}
            {visibleTodos.length > 0 &&
                visibleTodos.map((item, idx) => {
                    return (
                        <ToDoItem
                            key={item.id}
                            item={item}
                            handleStatus={() => handleStatus(item)}
                            handleRemove={() => handleRemove(item)}
                        />
                    );
                })}
        </div>
    );
};

export default ToDo;