import React,{Component} from "react";
class LifeCycle extends React.Component {  
    constructor(props) {  
       super(props);  
       this.state = {hello: "JavaTpoint"};  
       this.changeState = this.changeState.bind(this)  
    }    
    render() {  
       return (  
          <div>  
              <h1>ReactJS component's Lifecycle</h1>  
              <h3>Hello {this.state.hello}</h3>  
              <button onClick = {this.changeState}>Click Here!</button>          
          </div>  
       );  
    }  
    componentWillMount() {  
       console.log('Mounting Phase: Component Will MOUNT!')  
    }  
    componentDidMount() {  
       console.log('Mounting Phase: Component Did MOUNT!')  
    }  
    changeState(){  
       this.setState({hello:"All!!- Its a great reactjs tutorial."});  
    }  
    componentWillReceiveProps(newProps) {      
       console.log('Updating Phase: Component Will Recieve Props!')  
    }  
    shouldComponentUpdate(newProps, newState) {  
       return true;  
    }  
    componentWillUpdate(nextProps, nextState) {  
       console.log('Updating Phase: Component Will UPDATE!');  
    }  
    componentDidUpdate(prevProps, prevState) {  
       console.log('Updating Phase: Component Did UPDATE!')  
    }  
    componentWillUnmount() {  
       console.log('Unmounting Phase: Component Will UNMOUNT!')  
    }  
 }  
 export default LifeCycle;  