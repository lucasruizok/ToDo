import { useEffect, useState, useMemo } from "react";
import FilterButton from "./FilterButton";
import ToDoForm from "./TodoForm";
import ToDoList from "./TodoList";

const initialData = [
    { id: 1, title: "Lorem ipsum dolor sit amet", completed: false },
    { id: 2, title: "Vivamus id arcu laoreet", completed: false },
    { id: 3, title: "Donec cursus mi", completed: true },
    { id: 4, title: "Aenean id fringilla justo", completed: false }
];

const filterValues = {
    ALL: "all",
    COMPLETE: "complete",
    INCOMPLETE: "incomplete"
};

const ToDo = () => {
    const [filter, setFilter] = useState(filterValues.ALL);
    const [todos, setTodos] = useState(initialData);
    const [doneCount, setDoneCount] = useState(0);

    const handleStatus = (item) => {
        const newTodos = [...todos];
        const newTodo = newTodos.find((todo) => { return todo.id === item.id });
        newTodo.completed = !newTodo.completed;
        setTodos(newTodos);
    };

    const handleCount = () => {
        const newCount = todos.filter((item) => item.completed).length;
        setDoneCount(newCount);
    }

    useEffect(() => {
        handleCount();
    }, [todos])

    const handleRemove = (item) => {
        setTodos([...todos].filter(todo => todo.id != item.id));
    };

    const handleAddTodo = (newTodo) => {
        let newTodoItem = { id: +new Date(), title: newTodo, completed: false };
        setTodos([...todos, newTodoItem]);
    }

    const visibleTodos = useMemo(()=> {
        let filterTodosList = todos.filter(todo => {
            if (filter === filterValues.COMPLETE) {
                return todo.completed;
            } else if (filter === filterValues.INCOMPLETE) {
                return !todo.completed;
            } else {
                return todo;
            }
        })
        return filterTodosList;
    },[filter, todos]);

    return (
        <>
            <h1>
                <strong>ToDo</strong> List
            </h1>
            <ToDoForm handleAddTodo={handleAddTodo}/>
            <div className="filter-wrapper">
                <div className="filter-tabs">
                    <FilterButton
                        activeFilter={filter}
                        filter="all"
                        onClick={() => setFilter(filterValues.ALL)}
                    />
                    <FilterButton
                        activeFilter={filter}
                        filter="complete"
                        onClick={() => setFilter(filterValues.COMPLETE)}
                    />
                    <FilterButton
                        activeFilter={filter}
                        filter="incomplete"
                        onClick={() => setFilter(filterValues.INCOMPLETE)}
                    />
                </div>
                <p style={{ lineHeight: 1.5 }}>
                    {doneCount === todos.length
                        ? `🎉 ${doneCount}/${todos.length} all todos complete!`
                        : `${doneCount}/${todos.length} todos complete`}
                </p>
            </div>
            <ToDoList visibleTodos={visibleTodos} handleStatus= {handleStatus} handleRemove={handleRemove} />
        </>
    );
};

export default ToDo;