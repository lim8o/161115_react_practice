import React, {Component} from 'react'
import {Link} from 'react-router'



export default class App extends Component {
    render () {
        return (
            <div>
               <h2>Hello, React Router!</h2>
                <ul>
                    <li>
                        <Link to="/about" activeClassName="active">About</Link>
                    </li>
                    <li>
                        <Link to="/repos" activeClassName="active">Repos</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}