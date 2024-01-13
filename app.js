import React from 'react'
import ReactDOM from 'react-dom/client';

const Heading = React.createElement("h1",{id: "heading"},"Hello from React");
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(Heading);

console.log(Heading);


/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>
 *      </h1>
 *  </div>
 * </div>
 * 
 * createElement creates an object JS, which is used to 
 * be converted by render method into HTML
 * 
 */
//code in react for above  
//can make array for upper layer 
const parent= React.createElement(
    "div",
    {id :"parent"},
    React.createElement(
    "div",
    {id:"child"},
    [React.createElement('h1',{key:"a"},"Deepak"),
    React.createElement('h2',{key:"b"},"Deepak")
    ])
);
console.log(parent);
root.render(parent);


//To overcome code length in this approach
//we need something like JSX