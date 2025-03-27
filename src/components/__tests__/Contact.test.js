import Contact from "../Contact"
import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
    test("Should load contact us component", () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside contact us component", () => {
        render(<Contact/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    test("Should load 2 input boxes inside contact us component", () => {
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    });
});

