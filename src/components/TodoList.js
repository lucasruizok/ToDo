import ToDoItem from "./TodoItem";
const ToDoList = ({visibleTodos, handleStatus, handleRemove}) => {

    return (
        <>
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
        </>
    );
};
export default ToDoList;