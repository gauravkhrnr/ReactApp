import React,{Component} from 'react';
import ReactDOM from 'react-dom';  
class Employee extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data: [
                {
                    name:'Gaurav'
                },
                {
                    name:'David'
                },
                {
                    name:'Jones'
                }
            ],
            message:{
                name: "MyApp"
            }
        }
       
    }
  
    render(){
        return(
            <div>
                <StudentName message={this.state.message}/>
                <ul>
                    {this.state.data.map(item => <List data={item}></List>)}
                </ul>
            </div>
        );
    }
}

class StudentName extends React.Component{
    render(){
        return(
            <div>
                <h3>Student names:{this.props.message.name}</h3>
            </div>
        );
    }
}

class List extends React.Component{
    render(){
        return(
            <ul>
                <li>{this.props.data.name}</li>
            </ul>
        );
    }
}

export default Employee;  