import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import ToDoItem from "./TodoItem";

test("renders ToDoItem content", () => {
    const todo = {
        title: "comprar comida",
        completed: true
    }
    const component = render(<ToDoItem item={todo}/>);
    expect(component.container).toHaveTextContent(todo.title);
});