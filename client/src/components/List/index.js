import React, { Component } from 'react'
import ListItem from "../ListItem/index";

class List extends Component {

  //renders the individual list items and maps through them to compile into a list of each item
  render() {
    return (
      <div>
        {this.props.newBookState.map((bookInfo) => (
          <ListItem
            key={bookInfo.id}
            id={bookInfo.id}
            title={bookInfo.volumeInfo.title}
            link={bookInfo.volumeInfo.previewLink}
            authors={bookInfo.volumeInfo.authors + ", "}
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

export default List

