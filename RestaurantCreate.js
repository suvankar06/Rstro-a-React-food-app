import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu'

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            rating: null,
            address: null
        }
    }
    create() {
        fetch("http://localhost:3000/restaurant", {
            method: 'Post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((Response) => {
                alert("Restaurent has been added")
            })
        })
    }
    render() {
        return (
            <div>
                 <NavBarMenu />
                <h1>Restaurant Create</h1>
                <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                    placeholder="Restaurent Name" /> <br /><br />
                <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                    placeholder="Restaurent Email" />  <br /><br />
                <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                    placeholder="Restaurent Rating" />  <br /><br />
                <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                    placeholder="Restaurent Address" />  <br /><br />
                <button onClick={() => { this.create() }}>Add Restaurent</button>
            </div>
        );
    }
}

export default RestaurantCreate;