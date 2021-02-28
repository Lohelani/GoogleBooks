import React from "react";
import { Component } from "react";
import API from "../utils/API";
import {Container} from "../components/Container/index";
import SavedBooks from "../components/SavedBooks/index";



class Saved extends Component {

    state = {
        saved: []
    }

    //getBooks from API to grab saved books from the db
    componentDidMount = () => {
        this.getBooks()
    }

    getBooks = () => {
        API.getBooks().then(results => {
            this.setState({
                saved: results.data
            })
            console.log(results)
        }).catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <Container fluid>

                    {this.state.saved.length ? (
                        <SavedBooks
                            newSavedState={this.state.saved}
                            getBooks={this.getBooks}
                            >
                        </SavedBooks>
                    )
                        : (
                            <div>No books to display </div>
                        )}
                </Container>

            </div>
        )
    }
}

export default Saved
