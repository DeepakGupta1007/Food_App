import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import RestaurantCard from "../RestaurantCard"
import listOfRest from "../../utils/mockData"

describe("Testing Restuarant Component",()=>{
    it("Should Render Restuarant Cards with props data",()=>{
        
        render(<RestaurantCard resData={listOfRest[0]}> </RestaurantCard>);
        
        const resMenu =  screen.getByText(/Bakery/);
        expect(resMenu).toBeInTheDocument();
    });
})

//WRITE A TEST CASE FOR TESTING WITH PROMOTED LABEL