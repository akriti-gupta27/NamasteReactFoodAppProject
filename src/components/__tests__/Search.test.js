import {fireEvent, render} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
}); 

it("should render the body component with search button", async () => {
    await ActiveXObject(async () => 
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        )
    )

    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "pizza"}})

    expect(searchBtn).toBeInTheDocument();

})