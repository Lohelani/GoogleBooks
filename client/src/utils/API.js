/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
    
    googleBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    
    saveBook: function(bookDetails) {
        return axios.post("/api/books", bookDetails);
    },
    
    getBooks: function() {
        return axios.get("/api/books");
    },
    
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
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
