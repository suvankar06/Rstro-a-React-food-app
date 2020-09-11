import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBarMenu from './NavBarMenu';
class Login extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            password:""
        }

    }
    login()
    {
        console.warn(this.state)
        fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
            data.json().then((response) => {
                console.warn("response", response)
                if(response.length > 0)
                {
                    localStorage.setItem('login',JSON.stringify(response))
                    console.warn(this.props.history.push('list'))
                }
                else
                {
                    alert("Please check Username and Password")
                }
             } )
            })
    }
    render() {
        return (
            <div>
                 <NavBarMenu />
                 <input type="text"
                  name="user" onChange={(event) =>this.setState({ name: event.target.value })}  placeholder="Username"/> <br /><br />
                     <input type="password" name="password" onChange={(event) =>this.setState({ password: event.target.value })} placeholder="Password"
                     /> <br /><br />
                    <button onClick={() => { this.login() }}>Login</button>
            </div>
        );
    }
}

export default Login;