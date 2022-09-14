import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from "@testing-library/react";
import ToDoList from "./TodoList";

describe("<ToDoList/>", () => {
    let component;
    const mockHandler = jest.fn();
    const todos = [{
        id:5,
        title: "comer",
        completed: true
    }];

    beforeEach(()=>{
        component = render(
        <ToDoList visibleTodos={todos} handleStatus={mockHandler}/>
        );
    });

    test("Debe mostrar todo y modificar el estado", () =>{
        const title = todos[0].title;
        const button = component.getByText(title);
        fireEvent.click(button);
    });
});