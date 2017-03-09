import React, {Component} from 'react'

class Search extends Component {

    search = () => {
        const searchName = this.refs.searchName.value.trim()
        if(searchName) {
            //将search交给App

        }
    }

    render () {
        return (
            <div>
                <input type="text" placeholder="enter the name you search" ref="searchName"/>
                <button onClick={this.search}>Search</button>
            </div>
        )
    }
}
Search.propType = {
    setSearchName: Propotyprs
}

export default Search





