import axios from 'axios';
import React, { Component } from 'react'

export class AxiosTest extends Component {
    state = {
        persons:[]
    };
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            console.log(response)
            this.setState({persons:response.data})
        })
    }
    render() {
        return (
           <ul>
               {this.state.persons.map(person=><li key={person.id}>{person.name}</li>)}
           </ul>
        )
    }
}

export default AxiosTest
