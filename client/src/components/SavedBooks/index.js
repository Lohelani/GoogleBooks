import React from "react";
import {Component} from "react";
//import ListItem from "../ListItem/index"
import SavedBooksListI from "../SvdBooksListI/index";

class SavedBooks extends Component {
    render () {
        return (
            <div>
                {this.props.newBookState.map((bookInfo) => (
          <SavedBooksListI
            key={bookInfo.id}
            id={bookInfo.id}
            title={bookInfo.volumeInfo.title}
            link={bookInfo.volumeInfo.previewLink}
            authors={bookInfo.volumeInfo.authors + ", "}
            //classmate helped with image rendering here
            image={bookInfo.volumeInfo.imageLinks?.thumbnail}
            description={bookInfo.volumeInfo.description}
            //call bookRender from search.js 
            bookRender={this.props.bookRender}
          />
        )

        )}
            </div>
        )
    }
}

export default SavedBooks;