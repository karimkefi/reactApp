import React, { Component } from 'react'

class addCharacter extends Component {
    state = {
        name: null,
        age: null,
        vehicle: null
    }

    // setting state
    // takes the id of the target element of event object (same name of the state key)
    // sets this to the target element value
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    //this function is capturing the state of the component on Form Submit
    // it is using the parent's (App.js) prop function to add component's state to parent's state
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCharacterToApp(this.state)
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="vehicle">Vehicle:</label>
                    <input type="text" id="vehicle" onChange={this.handleChange} />
                    <button>Add Character</button>
                </form>
            </div>
        )
    }

}

export default addCharacter
