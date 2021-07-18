import React, { Component } from 'react'
import User from './User'

class UserList extends Component {
    state =
    {
        currentIndex: -1,
        list : this.returnList()
    }

    returnList()
    {
        if (localStorage.getItem('users') == null)
            localStorage.setItem('users', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('users'))
    }

    onAddOrEdit = (data) =>
    {
        var list = this.returnList()
        list.push(data)
        localStorage.setItem('users', JSON.stringify(list))
        this.setState({list})
    }
    render() {
        return (
            <div>
                <User 
                onAddOrEdit = {this.onAddOrEdit}/>
                <hr />
                <table>
                    <tbody>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.FirstName}</td>
                                <td>{item.LastName}</td>
                                <td>{item.EmailAddress}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserList