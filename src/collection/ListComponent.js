import React,{Component} from "react";
function List(props) {
    return (
    <>
        {
            props.name.map((name)=>{
                return  (<li>{name}</li>);  
            })
        }
    </>
    );
}
class ListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            names : ["Jones","Danel","Peter","Felix"]
        }
    };

    render(){
        return (
            <div>  
                <h1> Display List </h1>
                <ul>
                    <List name={this.state.names} />
                    {/* {
                        this.state.names.map((name)=>{
                            return (<li>{name}</li>)
                        })
                    } */}
                </ul>
            </div>    
        );
    }
}
export default ListComponent;