import React,{Component} from "react";
function Message(props){
    if(props.isLogedin){
        return (<h2>Welcom to the page...</h2>);
    }else{
        return (<h2>Please Login...</h2>);
    }
}
function Login(props){
    return( <button onClick={props.clickInfo}>Login</button>); 
}
function Logout(props){
    return( <button onClick={props.clickInfo}>Logout</button>); 
}
class LoginComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogin(){
        this.setState({isLoggedIn:true});
    }
    handleLogout(){
        this.setState({isLoggedIn:false});
    }
    render(){
        return(
            <div>
                <h1>Login Page</h1>
                <Message isLogedin={this.state.isLoggedIn} />
                {
                    (!this.state.isLoggedIn)?
                        (<Login clickInfo={this.handleLogin} />)
                    :
                        (<Logout clickInfo={this.handleLogout} />)
                }
            </div> 
        );
    }
}
export default LoginComponent;