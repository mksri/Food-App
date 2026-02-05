import React from "react";
import Child1 from "./Child1";


class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log("constructor");
        this.state = {
            count: 0,
            count2: 1
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
    }
   

    render(){

        const { name , location } = this.props;
         console.log("render");


        return(
       <div>
       <Child1 name={"From first Child"}/>
       <Child1 name={"From second Child"}/>
       <Child1 name={"From third Child"}/>
       <Child1 name={"From fourth Child"}/>
       <Child1 name={"From fifth Child"}/>
       <Child1 name={"From six Child"}/>
       <Child1 name={"From seven Child"}/>
</div>
        )
    }
}

export default UserClass;