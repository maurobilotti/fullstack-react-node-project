import React from 'react'
import axios from 'axios'


export default class Caller extends React.Component {
    
    state = {
        persons: []
    }

    constructor(props)
    {
        super(props);

        var url = process.env.REACT_APP_BACKEND_URL
        axios.get(`${url}/person`)
            .then(({data}) => {
                this.setState({ persons : data });
            })
    }

    render() {
        return (
            <div>
                {this.state.persons.map(person => <div key={person.id}> {person.email} </div>)} 
            </div>
        )
    }
}