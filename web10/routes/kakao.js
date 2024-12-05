var express = require('express');
var router = express.Router();

router.get('/book', function(req, res, next) {
  res.render('index', { title: '도서검색', pageName:'kakao/book.ejs' });
});

router.get('/local', function(req, res, next) {
  res.render('index', { title: '지역검색', pageName:'kakao/local.ejs' });
});

router.get('/blog', function(req, res, next) {
  res.render('index', { title: '블로그검색', pageName:'kakao/blog.ejs' });
});

router.get('/book/info', function(req, res, next) {
  const title = req.query.title;
  const thumbnail = req.query.thumbnail;
  const price = req.query.price;
  const authors = req.query.authors;
  const publisher = req.query.publisher;
  const isbn = req.query.isbn;
  const contents = req.query.contents;
  const info = {
    title,
    thumbnail,
    price,
    authors,
    publisher,
    isbn,
    contents
  }
  res.render('index', { title: '도서정보 페이지', pageName:'kakao/info.ejs', info: info});
});

module.exports = router;