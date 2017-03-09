import React, {Component} from 'react'

class List extends Component {

    constructor (props) {
        super(props)
        this.state = {
            firstView: true,
            loading: false,
            users: [],
            errorMsg: null
        }
    }
    render () {

        const {firstView, loading, users, errorMsg} = this.state
        if(firstView) {
            return <h2>Enter name to search</h2>
        } else if(loading) {
            return <h2>loading.......</h2>
        } else if(errorMsg) {
            return <h2>{{errorMsg}}</h2>
        } else {

            const userList = users.map((user, index) => (
                <div className="card">
                    <a href={user.html_url} target="_blank">
                        <img src={user.avatar_url} style={{width: '100px'}}/>
                    </a>
                    <p className="card-text">{user.login}</p>
                </div>
            ))
            return (
                <div className="row">{userList}</div>
            )
        }





    }
}

export default List