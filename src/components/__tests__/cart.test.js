//Write the integration testing for the adding of the cart and monitoring if the header changes

import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from '../RestaurantMenu'
import { resMenu } from "../mocks/resMenu";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from '../Header'
import Cart from '../Cart'
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(resMenu)
        }
    })
})
describe("It should load the restaurant menu and test the add button functionality of the cart menu.",()=>{
    it("Should test the cart page,",async()=>{
        await act(async()=>{
            render(<BrowserRouter><Provider store={appStore}><Header></Header><RestaurantMenu></RestaurantMenu><Cart></Cart></Provider>/Provider></BrowserRouter>)
        });

        const res_Name= screen.getByText("Theobroma");
        expect(res_Name).toBeInTheDocument();   

        const accordianHeader=screen.getByText("Recommended (5)");
        fireEvent.click(accordianHeader);

        const menu1= screen.getByText("Valentine's Chocolate & Strawberry Cake [385g]");
        expect(menu1).toBeInTheDocument();   


        expect(screen.getAllByTestId('categories-menu').length).toBe(5);

        const addBtn = screen.getAllByRole("button",{name: "Add"});
        expect(addBtn.length).toBe(5);

        fireEvent.click(addBtn[0]);

        const cartItem = screen.getByText("Cart 1");
        expect(cartItem).toBeInTheDocument();


        fireEvent.click(addBtn[1]);

        const newcartItem = screen.getByText("Cart 2");
        expect(newcartItem).toBeInTheDocument();

        //This is the result 5 from restaurant and 2 from the cart ones.
        const addBtnNew = screen.getAllByRole("button",{name: "Add"});
        expect(addBtnNew.length).toBe(7);

        //Now pressing ccart buttons
        const clearAll = screen.getByRole("button",{name:"Clear Cart"});
        fireEvent.click(clearAll);

        const addBtnNewafterClearing = screen.getAllByRole("button",{name: "Add"});
        expect(addBtnNewafterClearing.length).toBe(5);


        const emptyText= screen.getByText("Add Items");
        expect(emptyText).toBeInTheDocument();


        //Need to break this test case into smaller test case.

    });   

});