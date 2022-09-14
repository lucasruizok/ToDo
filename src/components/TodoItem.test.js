import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import ToDoItem from "./TodoItem";

describe("<ToDoItem/>", () => {
    let component;
    const mockHandler = jest.fn();
    const todo = {
        id:5,
        title: "comprar comida",
        completed: true
    }
    beforeEach(()=>{
        component = render(
            <ToDoItem item={todo} handleRemove={mockHandler}/>
        );
    });
    test("Debe mostrar texto del ToDoItem", () => {
        expect(component.container).toHaveTextContent(todo.title);
    });
});
