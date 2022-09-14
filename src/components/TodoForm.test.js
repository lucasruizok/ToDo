import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from "@testing-library/react";
import ToDoForm from './TodoForm';
describe("<TodoForm/>", () => {
    let component;
    const mockHandler = jest.fn();
    beforeEach(()=>{
        component = render(
        <ToDoForm handleAddTodo={mockHandler}/>
        );
    })
    test("Debe ejecutar la funcion handleAddTodo", () =>{
        const inputToDo = component.getByRole('textbox');
        fireEvent.change(inputToDo, {target: {value: 'cocinar'}});
        const button = component.getByText("Add");
        fireEvent.click(button);
        expect(mockHandler.mock.calls).toHaveLength(1); 
    })
})