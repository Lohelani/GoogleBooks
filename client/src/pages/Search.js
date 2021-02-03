import React, { Component } from 'react';
import API from "../utils/API"

class Search extends Component {
    state= {
        books: [],
        q: "Lord of the Rings"
    }
    componentDidMount () {
        API.getBooks(this.state.q).then(res => {this.setState({books:res.data})
        console.log(this.state.q)})
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Search
