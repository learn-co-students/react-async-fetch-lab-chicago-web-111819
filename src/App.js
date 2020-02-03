import React from 'react'

export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            data: []
        }
    }

    

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    data: json.people
                })
            })
    }

    render(){
        return(
            <p>{ this.state.data.map(people => { return people.name})}</p>
        )
    }
}