import React, {Component} from 'react'
//import {Link} from 'react-router'
import MyLink from './MyLink'

export default class Repos extends Component {

    constructor (props) {
        super(props)
        this.state = {
            repos: [
                {username: 'limbo', repoName: 'react'},
                {username: 'lomo', repoName: 'react-router'},
                {username: 'sneaky', repoName: 'angular'},
                {username: 'turtle', repoName: 'antd'}
            ]
        }
    }


    render() {
        const lis = this.state.repos.map((repo, index) => (
            <li key={index}><MyLink to={`/repos/${repo.username}/${repo.repoName}`}>{repo.repoName}</MyLink></li>
        ))

        return (
            <div>
                <h3>Repos</h3>
                <ul>
                    {lis}
                </ul>
                {this.props.children}
            </div>
        )
    }
}