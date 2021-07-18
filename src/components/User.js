import React, { Component } from 'react'

class User extends Component {
    state =
    {
        FirstName : '',
        LastName : '',
        EmailAddress : '',
        Password : '',

    }
    
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} autoComplete="off">
                <input name="FirstName" placeholder="Account FirstName" onChange={this.handleInputChange} value={this.state.FirstName} /><br />
                < input name="LastName" placeholder="LastName" onChange={this.handleInputChange} value={this.state.LastName} /><br />
                < input name="EmailAddress" placeholder="EmailAddress" onChange={this.handleInputChange} value={this.state.EmailAddress} /><br />
                < input name="Password" placeholder="Password" onChange={this.handleInputChange} value={this.state.Password} /><br />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default User