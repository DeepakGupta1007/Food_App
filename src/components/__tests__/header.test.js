import "@testing-library/jest-dom" //For the function expect
import { fireEvent, render, screen } from "@testing-library/react"; //To render and get componenets
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom"; //For routing to work LINK attribute

describe("Unit Testing for the header",()=>{
    it("Should load header component with a login button",()=>{

        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header></Header>
            </Provider>
            </BrowserRouter>
        );

        // const loginbutton =screen.getByRole("button");

        //Alternative 
        // const loginbutton =screen.getByText("Login");

        const loginbutton =screen.getByRole("button",{name:"Login"});


        expect(loginbutton).toBeInTheDocument();
    });


    it("Should have zero cart after loading.",()=>{

        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header></Header>
            </Provider>
            </BrowserRouter>
        );

        const cartItems = screen.getByText("Cart 0");
        // const cartItems = screen.getByText("Cart 1");


        expect(cartItems).toBeInTheDocument();
    });

    it("Should have a header with a cart Item",()=>{

        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header></Header>
            </Provider>
            </BrowserRouter>
        );

        const cartItems = screen.getByText(/Cart/);
        // const cartItems = screen.getByText("Cart 1");


        expect(cartItems).toBeInTheDocument();
    });


    it("Should change login button to logout ",()=>{

        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header></Header>
            </Provider>
            </BrowserRouter>
        );

        const loginbutton =screen.getByRole("button",{name:"Login"});

        fireEvent.click(loginbutton);
        const logoutbutton =screen.getByRole("button",{name:"Logout"});
        expect(logoutbutton).toBeInTheDocument();
    });

    
});


//*Inorder to test the components using redux store, we need to provide the store to the testing component.