import React from "react";
import Child1 from "./Child1";


class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log("constructor");
        this.state = {
            userInfo:{
                login: "dummy",
                location:"Default"
            }
        }
    }

   async componentDidMount(){

        const data = await fetch("https://api.github.com/users/mksri");
        const json = await data.json();
        console.log(json)
          this.setState({
            userInfo: json
          }) 
        
    }
   

    render(){

        const { login , location } = this.state.userInfo;
        return(
       <div>
       <Child1 name={"From first Child"}/>  
        <h3>{login}</h3>
</div>
        )
    }
}

export default UserClass;