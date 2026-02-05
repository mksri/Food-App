import React from "react";


class Child1 extends React.Component {

    constructor(props){
        super(props);
        console.log("constructor",this.props.name);
    }

    componentDidMount(){

        console.log("Did Mount",this.props.name);

    }


    render(){
        console.log("Render",this.props.name);
        return(
            <div>Child1 component</div>
        )
    }

}

export default Child1;