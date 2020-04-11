var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});
router.get('/shop', function(req, res, next) {
    res.render('shop', { title: 'Shop' });
});
router.get('/tickets', function(req, res, next) {
    res.render('tickets', { title: 'Tickets' });
});
router.get('/stats', function(req, res, next) {
    res.render('stats', { title: 'Stats' });
});
module.exports = router;