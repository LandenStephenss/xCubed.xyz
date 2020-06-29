import React, { PureComponent } from "react";
import { Redirect } from 'react-router-dom'
import './Style.css'
class GuildSelector extends PureComponent {
    constructor(props) {
        super();
        console.log(props)
        this.state = {
            loggedIn: true,
            guilds: null,
            loaded: false,
        }
    }

    async componentDidMount() {

    }

    render() {
        return (<p>test</p>)
    }
}


export default GuildSelector;