import React, { Component } from 'react';

class ListItem extends Component {

    state = {
        mounted: false
    }
    
    componentDidMount = () => {
        this.setState({
            mounted: true
        })
        
    }

    handleSearch = () => {
        this.props.bookRender(this.props)
    }
    
    render () {

        return (

            <div>
                <div className="card">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <img src={this.props.image}/>
                        <p className="card-title">{this.props.title}</p>
                        <p className="card-text" >{this.props.description}</p>
                        <p>By: {this.props.authors}</p>
                        <a href={this.props.link} target="_blank" className="btn">View this Book on Google</a>
                        <button onClick={this.handleSearch} className="btn">Save Book</button>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ListItem;

