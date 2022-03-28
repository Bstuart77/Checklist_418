import React from "react";
import "./BackgroundButton.css";

class BackgroundButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {label: undefined, background: undefined};

    }

    static getDerivedStateFromProps(props, state){
        console.log(props.label);
        return{
            label: props.label,
            background: props.background,

        };
    }

    setBackground(){
        document.getElementById("profile-page").style.background = this.state.background + "no-repeat center";
        document.getElementById("profile-page").style.backgroundSize = "cover";
        console.log("Button clicked");
    }

    render(){
        return(<button className = "ProfilePageButton" onClick = {this.setBackground.bind(this)}> <p>{this.state.label}</p> </button>);
    }

}

export default BackgroundButton;