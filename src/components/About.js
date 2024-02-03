import React, { useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";


// class About extends React.Component{
//     constructor(props){
//         super(props);
//         // console.log("Constructor");
//     }
//     componentDidMount(){
//         // console.log("Component did mount");
//     }
    
//     render(){
//         // console.log("Render called");
//         return(
//             <div>
//                 <h1>About</h1>
//                 <h1>This is React Application.</h1>
//                 <User></User>
//                 <UserClass name={"Deepak G"} location={"Delhi"}/> {/*Passing parameter*/}
//             </div>
//         )
//     }
// }

const About =()=>{
    useEffect(()=>{
        console.log("useEffect Caled")
        const timer=setInterval(()=>{
            console.log("Deepak Called About");
        },1000)

        return ()=>{
            console.log("useEffect unMounted")
            //Called for unbounding the component
            clearInterval(timer);
        };
    },[]);
    console.log("Rendered About component");
    return(
        <div>
            <h1>About</h1>
            <h1>This is React Application.</h1>
            <User></User>
            <UserClass name={"Deepak G"} location={"Delhi"}/> Passing parameter
        </div>
    )
}

export default About;