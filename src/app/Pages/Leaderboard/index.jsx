import React, {
    PureComponent
} from 'react';
import Card from './Components/Card.jsx'

export default class Leaderboard extends PureComponent {
    constructor() {
        super();
        this.state = {
            items: [],
            error: null,
            isLoaded: false
        }
    }
    async componentDidMount() {
        var result;
        await fetch("http://localhost/api/v1/users/topLevels")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                this.state.items = res.users;
                result = res;
        })
        console.log(result)
    }
    render() {

        return ( 
            <div>
                <p>{this.state.items}</p>
            </div>
        )
    }
}