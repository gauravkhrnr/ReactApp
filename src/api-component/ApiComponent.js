import React,{Component} from 'react';
import ReactDOM from 'react-dom';  
class ApiComponent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            message:{
                name: "MyApp"
            }
        }
        this.clickEvent = this.clickEvent.bind(this);  
        this.updateState = this.updateState.bind(this);  
        this.findDomNode = this.findDomNode.bind(this);  
    }
    clickEvent(){
        console.log(this);
    }
    updateState(){
        let message = { message:{
            name: "My-App"
        }}
        this.setState(message);
    }
    findDomNode(){
        var  header = document.getElementById("h1");
        ReactDOM.findDOMNode(header).style.color = 'red';
    }

    render(){
        return(
            <div>
                <h1 id="h1">Welcome to {this.state.message.name}</h1>
                <h3>Random number: {Math.random()}</h3> 
               
                <button onClick={this.clickEvent}>Click Me!</button>
                <button onClick={this.updateState}>Update State</button>
                <button onClick={this.findDomNode}>Find Dom</button>
            </div>
        );
    }
}

export default ApiComponent;  