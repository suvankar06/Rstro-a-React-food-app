import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';
class RestaurantUpdate extends Component {

    constructor() {
        super();
        this.state = {
            name: null,
            email: null,
            rating: null,
            address: null,
            id:null
        }
    }


    componentDidMount() {
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
               this.setState({ 
                   name:result.name,
                   email:result.email,
                   rating:result.rating,
                   address:result.address,
                   images:result.images,
                   id:result.id
                })
            })
        })
    }
    update() {
        fetch('http://localhost:3000/restaurant/'+this.state.id, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((Response) => {
                alert("Restaurent has been updated")
            })
        })
    }
    render() {
       // console.warn(this.state);
        return (
            <div>
                <NavBarMenu />
                <h1>Restaurant Update</h1>
                <div>
                <h1>Restaurant Create</h1>
                <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                    placeholder="Restaurent Name" value={this.state.name} /> <br /><br />
                <input onChange={(event) => { this.setState({ email: event.target.value }) }}
                    placeholder="Restaurent Email" value={this.state.email} />  <br /><br />
                <input onChange={(event) => { this.setState({ rating: event.target.value }) }}
                    placeholder="Restaurent Rating" value={this.state.rating} />  <br /><br />
                <input onChange={(event) => { this.setState({ address: event.target.value }) }}
                    placeholder="Restaurent Address" value={this.state.address}/>  <br /><br />
                <input onChange={(event) => { this.setState({ images: event.target.value }) }}
                    placeholder="Restaurent Address" value={this.state.images}/>  <br /><br />
                <button onClick={() => { this.update() }}>Update Restaurent</button>
            </div>
            </div>
        );
    }
}

export default RestaurantUpdate;