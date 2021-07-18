import React from 'react'
import UserForm from './UserForm'

export default function User() {
    return (
        <UserForm/>
    )
}

// import axios from "axios";

// const BASE_URL = 'https://localhost:44303/api/';

// export const ENDPIONTS = {
//     USER: 'User',
//     ROLE: 'Role',
//     DOCUMENT: 'Document'
// }

// export const createAPIEndpoint = endpoint => {

//     let url = BASE_URL + endpoint + '/';
//     return {
//         fetchAll: () => axios.get(url),
//         fetchById: id => axios.get(url + id),
//         create: newRecord => axios.post(url, newRecord),
//         update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
//         delete: id => axios.delete(url + id)
//     }
// }