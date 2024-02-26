import React,{Component} from "react";
class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {  
            personGoing: true,  
            numberOfPersons: 5  
        };  
        this.handleInputChange = this.handleInputChange.bind(this);  
    }

    submit(event){
        console.log(event);
        alert('You have entered the UserName and CompanyName successfully.');  
        event.preventDefault();  
    }

    handleInputChange(event) {  
        const target = event.target;  
        const value = target.type === 'checkbox' ? target.checked : target.value;  
        const name = target.name;  
        this.setState({  
            [name]: value  
        });  
    }

    render(){
        return(
            <form onSubmit={this.submit}>
                <h1>Uncontrolled Form Example</h1>  
                <label>Name:  
                    <input type="text" ref={this.input} />  
                </label>  
                <label>No. Of Person: 
                    <input  
                        name="numberOfPersons"  
                        type="number"  
                        value={this.state.numberOfPersons}  
                        onChange={this.handleInputChange} />  
                </label>
                <input  
                    name="personGoing"  
                    type="checkbox"  
                    checked={this.state.personGoing}  
                    onChange={this.handleInputChange} />  

                <input type="submit" value="Submit" /> 
            </form>
        );
    }
}

export default Form;