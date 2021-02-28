import React from "react"
import { Component } from 'react';
import API from "../utils/API";
import { Form } from "../components/Form/index";
import List from "../components/List/index";
import {Container} from "../components/Container/index";
//import ResultList from "../components/ResultList/index";

class Search extends Component {
    state = {
        q: "",
        books: []
    }

    componentDidMount() {
        this.onSearch();
    }

    onSearch = (query) => {
        //tutor helped with this 
        // When the form is submitted, use the API.saveBook method to save the book data
        API.loadBooks(query)
            .then(results => {
                // event.preventDefault()
                this.setState({
                    books: results.data.items,
                    q: ""
                },
                    console.log(results.data.items)
                )
            }).catch(err => console.log(err));
    }


    //     .then(res => this.setState({ books: res.data.items.map(bookInfo => this.bookRender(bookInfo)) }))
    //         .catch(err => console.error(err));
    // };
    //******* homework example ******* (might not work?)
    // Handles updating component state when the user types into the input field
    //   function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setFormObject({...formObject, [name]: value})
    //   };

    handleInputChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value })
    };


    handleFormSubmit = (event) => {
        event.preventDefault();
        this.onSearch(this.state.search);
        //console.log(event)
    };



    bookRender = bookInfo => {
        // console.log(bookInfo);
        // API.saveBook(
        return {
            title: bookInfo.volumeInfo.title,
            authors: bookInfo.volumeInfo.authors,
            description: bookInfo.volumeInfo.description,
            link: bookInfo.volumeInfo.infoLink,
            image: bookInfo.volumeInfo.imageLinks.thumbnail,
            _id: bookInfo.id
        }
        //)
        //res? needs to be the equvalent of useEffect loadBooks? in this case onSearch/setState?
        // .then(res => (res)).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Form search={this.state.search}
                        handleInputChange={this.handleInputChange}
                        name="title"
                        placeholder="Title"
                        handleFormSubmit={this.handleFormSubmit}
                    />


                    {this.state.books.length ? (
                        <List
                            newBookState={this.state.books}
                            bookRender={this.bookRender}>
                        </List>
                    )
                    : (
                        <div>No books to display </div>
                    )}
                </Container>
            </div>
        )
    }
}


export default Search;