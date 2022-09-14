import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from "@testing-library/react";
import FilterButton from "./FilterButton";

describe("<FilterButton/>", () => {
    let component;
    const mockHandler = jest.fn();
    const filterValue = "all"
    beforeEach(()=>{
        component = render(
        <FilterButton activeFilter={filterValue} filter={filterValue} onClick={mockHandler}/>
        );
    });
    test("Debe ejecutar la funcion onClick", () =>{
        const FilterButton = component.getByText(filterValue);
        fireEvent.click(FilterButton);
        expect(mockHandler.mock.calls).toHaveLength(1);
    });
    test("Debe mostrar el filto All en pantalla", () =>{
        expect(component.container).toHaveTextContent(filterValue)
    });
});