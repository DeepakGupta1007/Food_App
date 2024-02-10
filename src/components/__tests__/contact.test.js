import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"
test('Should load contact component.', () => { 
    
    //This will render to the JSDOM
    render(<Contact></Contact>);
    //screen is an object which coes from the js
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});


test('Should load contact component.', () => { 
    
    //This will render to the JSDOM
    render(<Contact></Contact>);
    //screen is an object which coes from the js
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();


});

test('Should load contact component.', () => { 
    
    //This will render to the JSDOM
    render(<Contact></Contact>);
    //screen is an object which coes from the js
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();

    
});

test("Should load two input boxes or not",()=>{
    render(<Contact/>)

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //console.log(inputBoxes);This will print the react elements of input boxes
    const count =inputBoxes.length;
    expect(count).toBe(3);
})


test('Should load contact component.', () => { 
    
    //This will render to the JSDOM
    render(<Contact></Contact>);
    //screen is an object which coes from the js
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    
});


//Beauty of jest - whenever somthing fails , it will show you a node
//What is role- role can be button, heading,para