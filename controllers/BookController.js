const axios = require('axios');

const url = "https://www.googleapis.com/books/v1/volumes?q=";

class BookController {
    getByStringSearch = async (string) => {
        try {
            const response = await axios.get(url + string);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };
}

module.exports = new BookController();