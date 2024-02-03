import React, { Component } from "react"

//extends react.component making react know that this is a component.
//Class based compnet has a method render which returns some piece of JSX
class UserClass extends React.Component{
//to recieve props
    constructor(props){
        super(props);
        this.state={
            // This is a very big object which holds all the state variables.
            // count:0,
            // countTo:5,
            userInfo: {
                name: "Guest",
                login:"GUest"
            },
        };
        console.log("Child Constructor");
        // This is way to write state variabe.
    }
    async componentDidMount(){
        console.log("Child Component mounted");
        
        const data = await fetch("https://api.github.com/users/DeepakGupta1007");

        const json =await data.json();
        this.setState({
            //state variable is updated so render() is again called
            userInfo: json,
        })

        this.timer=setInterval(()=>{
            console.log("Deepak Caled");
        },1000)
        //This will be called dont matter which component we goes after.
    }

    componentDidUpdate(){
        console.log("Component did update is called if once render is called and if dom rerenders.")
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("componentWillUnmount->This function is called just before the disappearing from HTML");
    }
    
    render(){
        // const {name,location}= this.props;
        // Destructure state
        console.log("Render()")
        const {name,login,avatar_url} = this.state.userInfo;
        return (
            <div className='user-card'>
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h2>UserId:{login}</h2>
                <h3>Contact: 8400973520</h3>
                {/* <h4>{this.state.count}:{countTo}</h4>
                <button onClick={()=>{

                    // Below is not the way to update variables.
                    // this.state.count=this.state.count+1;


                    //Never update state variables directly.

                    //This is what react offers---
                    this.setState({
                        count: this.state.count+1,
                        countTo: this.state.countTo
                    })
                    //If you are sending less than declared , then it will only update which are listed.
                }}>Click Me</button> */}
            </div>
          )
    }
}

export default UserClass;