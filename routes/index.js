const express = require('express');
const router = express.Router();
const BookController = require('../controllers/BookController');


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Home - Book Finder'
  });
});

router.get('/search/:string', (req, res) => {
  let string = req.params.string;
  getByString = async () => {
    let response = await BookController.getByStringSearch(string);
    let books = response.items;
    res.render('result', {
      title: 'Results - Book Finder',
      books
    })
  };
  getByString();
});

module.exports = router;