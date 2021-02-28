


//exact same as ListItem call

import React from 'react';


//function maybe?
function SavedBooksListI(props) {

    // state = {
    //     mounted: false
    // }

    // componentDidMount = () => {
    //     this.setState({
    //         mounted: true
    //     })

    // }

    // handleSearch = (props) => {
    //     this.props.getBooks(this.props)
    // }
    return (

        <div>
            < div className="card">
                
                    <img src={this.props.image} />
                    <p>{this.props.title}</p>
                    <p>{this.props.description}</p>
                    <p>By: {this.props.authors}</p>
                    <a href={this.props.link} target="_blank" className="btn">View this Book on Google</a>
                    <button onClick={this.handleSearch} className="btn">Save this Book</button>
                
            </div>
        </div>

    )
}



export default SavedBooksListI;