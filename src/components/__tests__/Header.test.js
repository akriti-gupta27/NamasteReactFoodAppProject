import { Provider } from "react-redux";
import Header from "../Header";
import {fireEvent, render, screen} from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

it("It should load header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "login"});
    expect(loginButton).toBeInTheDocument();
})

it("should render header component with a cart item 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItem = screen.getByText("Cart - (0 items)");
    expect(cartItem).toBeInTheDocument();
})

it("should render header component with a cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const cartItem1 = screen.getByText(/cart/);
    expect(cartItem1).toBeInTheDocument();
})

it("should change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "login"});
    
    fireEvent.click(loginButton);

    const logoutButton = screen.getByText("button", {name: "Logout"})
    expect(logoutButton).toBeInTheDocument();
})