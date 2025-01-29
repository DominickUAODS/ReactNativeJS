import React, {Component} from "react";
import {Text} from "react-native";
import propTypes from "prop-types";

class ClassComp extends Component {
static defaultProps={
    name:"no name",
    age: 0,
}

    render(){
        const {name, age} = this.props;
        return <Text style={{color:"white", fortSize:20}}>My Func Class Comp 

            Name = {name}. Age = {age}
        </Text> 
    }
}

ClassComp.PropTypes = {
    name:propTypes.string,
    age:propTypes.number,
    //skills:propTypes.arrayOf(propTypes.string)
}

export default ClassComp