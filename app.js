import React from 'react'
import ReactDOM from 'react-dom/client';

// ReactElement- Equivalent to DOM elements

//JSX-This is not HTML,let's put example of class and className for JSX.
//JSX- Attributes in JSX needs to be in camelcase.
//JSX need to be write in parenthesis in case of multiline.
//Javascript engine/browser does not understand JSX, JS Engine supports ECMA Script"(ES6). 
//console.log(jsxHeading);
// const heading = React.createElement("h1",{id: "heading"},"Deepak Gupta");
// console.log(heading);

//JSX React Eleemnt -Objects
const jsxHeading= (
<h1 id="heading">Deepak Gupta using jsxHeading
</h1>
);
const elem = <span>React Span Test</span>


//Functional Component
const HeadingComponent =()=>{
    return (
        <div id ="container">
        <h4 className = "Heading" id="heading">
            Deepak Gupta Functional Component 
        </h4>
        </div>
    )
};

// const HeadingComponentAlternate =()=> <h1>Deepak Gupta Functional Component</h1>

//Can also write like this-
const Title = function(){
    return (
        <>
        {
            //Can also write React.createElement
            //Can write any java script code in this area
        }
        <h1>Deepak Inside Functional Componet Way of writing</h1>
        </>
    )
};
//Try another component with JS Object and exprssion
const Number =1000;
const TitleComponent = ()=>{
    return (
        <>
        {elem}
        <h2>{Number*100}</h2>
        {jsxHeading}
        <h1>
            Deepak Designing Title
        </h1>
        <HeadingComponent />
        <HeadingComponent ></HeadingComponent>
        {HeadingComponent()}
        </>

    )
};
//This is known as component composition -composing two component into one another.





const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
//Cannot render like this
//root.render(HeadingComponent);

//Render like this
root.render(<TitleComponent/>);