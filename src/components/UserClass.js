import React, { Component } from "react"
import UserContext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo: {
                name: "Guest",
                login:"GUest"
            },
        };
    }
    async componentDidMount(){
        
        const data = await fetch("https://api.github.com/users/DeepakGupta1007");
        const json =await data.json();
        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){
    }
    
    render(){
        const {name,login,avatar_url} = this.state.userInfo;
        return (
            <div className='user-card'>
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h2>UserId:{login}</h2>
                <h3>Contact: 8400973520</h3>
                
                <UserContext.Consumer>
                        {({loggedInUser})=>(<h1>{loggedInUser}</h1>)}
                </UserContext.Consumer>
            </div>
          )
    }
}

export default UserClass;