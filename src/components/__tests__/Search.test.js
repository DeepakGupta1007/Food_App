import "@testing-library/jest-dom";
import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import { data } from "../mocks/resList";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";


//Here we are fake a fetch request, and creating the mock data.
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(data);
        }
    });
});


describe("Test cases of main page",()=>{

    beforeEach(()=>{
        // console.log("Before Each Called");
    })

    afterEach(()=>{
        // console.log("After Each called");
    })

    beforeAll(()=>{
        // console.log("Before All called");
    })

    afterAll(()=>{
        // console.log("After ALl Called");
    })

//How to test for the async request.
it("Should render the body component , along with performing searching ,card count",async()=>{
    

    //Use of act function to wrap which returns a promise which take a callback aync function
    await act(async()=>{
        render(<BrowserRouter><Body></Body></BrowserRouter>);
    })
    

    //testing the inital size of the cards
    const Initalcards = screen.getAllByTestId('card');
    expect(Initalcards.length).toBe(20);



    //Getting the count of the buttons
    const buttons= screen.getAllByRole("button");
    expect(buttons.length).toBe(2);


    //Now we are updating the serch button text
    const searchButton = screen.getByRole("button",{name:"Search"});
    
    //This getByTestId always works
    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput,{target:{value:"Burger"}});

    fireEvent.click(searchButton);

    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(2);
    


    //Write a test case for the filter top rated restaurants

})

it("Should filter top rated restaurants",async()=>{
     //Use of act function to wrap which returns a promise which take a callback aync function
     await act(async()=>{
        render(<BrowserRouter><Body></Body></BrowserRouter>);
    })

    const topRatedButton= screen.getByTestId('top-rated');
    fireEvent.click(topRatedButton);

    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(18);


})
});
//Basically react testing library render on JSDOm not on browsers so it has to give some additional import.