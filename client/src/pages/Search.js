import React from "react"
import { Component } from 'react';
import API from "../utils/API";
import { Form } from "../components/Form/index";
import { List } from "../components/List";
//import ResultList from "../components/ResultList/index";

class Search extends Component {
    state = {
        q: "",
        books: []
    }

    componentDidMount() {
        this.onSearch();
    }
    //constructor method here instead of function because class component
    onSearch = (query) => {
        //tutor helped with this 

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
        console.log(this.state.search)
    };

    //   // When the form is submitted, use the API.saveBook method to save the book data
    //   // Then reload books from the database
    //   function handleFormSubmit(event) {
    //     event.preventDefault();
    //     if (formObject.title && formObject.author) {
    //       API.saveBook({
    //         title: formObject.title,
    //         author: formObject.author,
    //         synopsis: formObject.synopsis
    //       })
    //         .then(res => loadBooks())
    //         .catch(err => console.log(err));
    //     }
    //   };

    bookRender = bookInfo => {
        // console.log(bookInfo);
        // API.saveBook(
           return {
            // title: bookInfo.title,
            // author: bookInfo.author,
            // description: bookInfo.description,
            // link: bookInfo.link,
            // image: bookInfo.image,
            // id: bookInfo.id
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
                        <div>
                            {/* <h2>No results to display</h2> */}
                        </div>
                    )}
            </div>
        )
    }
}



export default Search

// import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

// function Books() {
//   // Setting our component's initial state
//   const [books, setBooks] = useState([])
//   const [formObject, setFormObject] = useState({})

//   // Load all books and store them with setBooks
//   useEffect(() => {
//     loadBooks()
//   }, [])

//   // Loads all books and sets them to books
//   function loadBooks() {
//     API.getBooks()
//       .then(res => 
//         setBooks(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   // Deletes a book from the database with a given id, then reloads books from the db
//   function deleteBook(id) {
//     API.deleteBook(id)
//       .then(res => loadBooks())
//       .catch(err => console.log(err));
//   }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
//   };

//   // When the form is submitted, use the API.saveBook method to save the book data
//   // Then reload books from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.title && formObject.author) {
//       API.saveBook({
//         title: formObject.title,
//         author: formObject.author,
//         synopsis: formObject.synopsis
//       })
//         .then(res => loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Books Should I Read?</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 onChange={handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />
//               <Input
//                 onChange={handleInputChange}
//                 name="author"
//                 placeholder="Author (required)"
//               />
//               <TextArea
//                 onChange={handleInputChange}
//                 name="synopsis"
//                 placeholder="Synopsis (Optional)"
//               />
//               <FormBtn
//                 disabled={!(formObject.author && formObject.title)}
//                 onClick={handleFormSubmit}
//               >
//                 Submit Book
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Books On My List</h1>
//             </Jumbotron>
//             {books.length ? (
//               <List>
//                 {books.map(book => (
//                   <ListItem key={book._id}>
//                     <Link to={"/books/" + book._id}>
//                       <strong>
//                         {book.title} by {book.author}
//                       </strong>
//                     </Link>
//                     <DeleteBtn onClick={() => deleteBook(book._id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }


// export default Books;


// import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

// function Books() {
//   // Setting our component's initial state
//   const [books, setBooks] = useState([])
//   const [formObject, setFormObject] = useState({})

//   // Load all books and store them with setBooks
//   useEffect(() => {
//     loadBooks()
//   }, [])

//   // Loads all books and sets them to books
//   function loadBooks() {
//     API.getBooks()
//       .then(res => 
//         setBooks(res.data)
//       )
//       .catch(err => console.log(err));
//   };

//   // Deletes a book from the database with a given id, then reloads books from the db
//   function deleteBook(id) {
//     API.deleteBook(id)
//       .then(res => loadBooks())
//       .catch(err => console.log(err));
//   }

//   // Handles updating component state when the user types into the input field
//   function handleInputChange(event) {
//     const { name, value } = event.target;
//     setFormObject({...formObject, [name]: value})
//   };

//   // When the form is submitted, use the API.saveBook method to save the book data
//   // Then reload books from the database
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     if (formObject.title && formObject.author) {
//       API.saveBook({
//         title: formObject.title,
//         author: formObject.author,
//         synopsis: formObject.synopsis
//       })
//         .then(res => loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Books Should I Read?</h1>
//             </Jumbotron>
//             <form>
//               <Input
//                 onChange={handleInputChange}
//                 name="title"
//                 placeholder="Title (required)"
//               />
//               <Input
//                 onChange={handleInputChange}
//                 name="author"
//                 placeholder="Author (required)"
//               />
//               <TextArea
//                 onChange={handleInputChange}
//                 name="synopsis"
//                 placeholder="Synopsis (Optional)"
//               />
//               <FormBtn
//                 disabled={!(formObject.author && formObject.title)}
//                 onClick={handleFormSubmit}
//               >
//                 Submit Book
//               </FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Books On My List</h1>
//             </Jumbotron>
//             {books.length ? (
//               <List>
//                 {books.map(book => (
//                   <ListItem key={book._id}>
//                     <Link to={"/books/" + book._id}>
//                       <strong>
//                         {book.title} by {book.author}
//                       </strong>
//                     </Link>
//                     <DeleteBtn onClick={() => deleteBook(book._id)} />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }


// export default Books;
