const db = require("../models");
const axios = require("axios");

module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;
        axios.get("https://www.googleapis.com/books/v1/volumes", { params }).then(res => console.log(res))
        // need to grab results
    }


//passes into api file

//routes for google and routes for books


    
}

