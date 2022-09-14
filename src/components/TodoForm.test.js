import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from "@testing-library/react";
import ToDoForm from './TodoForm';
describe("<TodoForm />", () => {
    let component;
    beforeEach(()=>{
        component = render(
        <ToDoForm/>
        );
    })
    test("Debe mostrar una nueva tarea en la lista luego de presionar el boton Add", () =>{
        const inputToDo = component.getByRole('textbox');
        fireEvent.change(inputToDo, {target: {value: 'cocinar'}})
        const button = component.getByText("Add");
        fireEvent.click(button);
        expect(component.getByText("cocinar")).toBeDefined();
    })
})