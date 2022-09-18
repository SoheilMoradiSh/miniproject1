import React from "react";
import  ReactDOM  from "react-dom";
import Hello from "./hello"
import Timer from "./timer"
import './style.css'

class App extends React.Component{
    render(){
        return(
            <div className="main">
                <Hello/>
                <Timer/>
            </div>
        )
    }
}
export default App