import React, { Component } from 'react'
import ListItem from "../ListItem/index";

export default class List extends Component {

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
            image={bookInfo.volumeInfo.imageLinks.thumbnail}
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

// export default List;


// import React, { Component } from "react";
// import API from "../../utils/API";

// class List extends Component {

//   state = {
//     getBookInfos: [],
//   }

//   componentDidMount() {
//     API.getBookInfos()
//       .then(getBookInfos => this.setState({ getBookInfos: getBookInfos }))
//       .catch(err => console.error(err));
//   }

//   handleSave = bookInfo => {

//     if (this.state.getBookInfos.map(bookInfo => bookInfo._id).includes(bookInfo._id)) {
//       API.deleteBookInfo(bookInfo._id)
//         .then(deletedBookInfo => this.setState({ getBookInfos: this.state.getBookInfos.filter(bookInfo => bookInfo._id !== deletedBookInfo._id) }))
//         .catch(err => console.error(err));
//     } else {
//       API.saveBookInfo(bookInfo)
//         .then(getBookInfo => this.setState({ getBookInfos: this.state.getBookInfos.concat([getBookInfo]) }))
//         .catch(err => console.error(err));
//     }
//   }


//   render() {
//     return (
//       <div>
        
//       </div>
//     )
    
//     }
//   }

// export default List;




// // import React from "react";
// // import "./style.css";

// // // This file exports both the List and ListItem components

// // export function List({ children }) {
// //   return (
// //     <div className="list-overflow-container">
// //       <ul className="list-group">{children}</ul>
// //     </div>
// //   );
// // }

// // // export function ListItem({ children }) {
// // //   return <li className="list-group-item">{children}</li>;
// // // }
