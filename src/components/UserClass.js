import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            userInfo:{
                name: "DummyName",
                location: "Default"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akriti-gupta27");
        const json = await data.json(); 
        this.setState({
            userInfo: json,
        }) 
    }
    
    render(){
        return (
            <div className="user-card">
            <h1>Count: {this.state.count}</h1>
            <button onClick ={() =>{
                this.setState({
                    count:this.state.count + 1
                })
            }}>Count Increase</button>
            <h2>Name: {this.state.userInfo.login}</h2>
            <h3>Location: {this.state.userInfo.location}</h3>
            <h4>Contact: @akriti</h4>
            </div>
        )
    }
}

export default UserClass;