import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

export default class Routing extends Component {
    render() {
        return (
            <div>
                Router
                {/* Route -> path is a subset route match */}
                {/* <Route path="/home" exact component={Home}></Route>
                <Route path="/home/profile" component={Profile}></Route> */}

                {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/home/profile" component={Profile}></Route>
                    <Redirect from="/home" to= "/"></Redirect>
                    <Route path="/" component={Home}></Route>
                    <Route path="/home" component={Home}></Route>
                </Switch>
            </div>
        )
    }
}


class Home extends Component {
    render() {
        return (
            <div>Home</div>
        )
    }
}

class Profile extends Component {
    render() {
        return (
            <div>Profile</div>
        )
    }
}

class List extends Component {
    render() {
        return (
            <div>list</div>
        )
    }
}

class Error extends Component {
    render() {
        return (
            <div>g</div>
        )
    }
}




