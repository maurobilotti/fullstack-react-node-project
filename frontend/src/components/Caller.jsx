import React from 'react'
import axios from 'axios'

export default class Caller extends React.Component {
    
    state = {
        message: ""
    }

    constructor(props)
    {
        super(props);

        axios.get(`http://localhost:3001/api/person`)
            .then(({data}) => {
                this.setState({ message : data });
            })
    }

    render() {
        return (
          <div>
            Mensaje: 
            { this.state.message }
          </div>
        )
    }
}