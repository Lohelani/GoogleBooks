/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";


export default {
    //50 results gives an error?
  loadBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=25`);
  },
    
    saveBook: function(bookInfo) {
        return axios.post("/api/books", bookInfo).then(result => result.data);
    },
    
    //gets the saved books from the db
    getBooks: function() {
        return axios.get("/api/books").then(result => result.data);
    },
    
    // getBook: function(id) {
    //     return axios.get("/api/books/" + id);
    // },
    
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id).then(result => result.data);
    }
};

// import axios from "axios";

// export default {
//   // getBooks: function(query) {
//   //   return axios.get("/view/google", {params:{q: "title:" + query}});
//   // },
  
//   getSavedBooks: function() {
//     return axios.get("/view/books");
//   },
  
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
