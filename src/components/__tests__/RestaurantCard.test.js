import RestaurantCard from "../RestaurantCard"
import {render} from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom";

it("should render res component with props data",() => {
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
})