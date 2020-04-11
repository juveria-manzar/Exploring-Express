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
router.get('/register', function(req, res) {
    res.render('register_form', { title: 'Register' })
})
router.post('/register', function({ body }, res) {
    console.log(body)
    let submissionData = {
        message: "the user registered with these credentials",
        credentials: {
            username: body.username,
            password: body.password
        }
    }
    res.json(submissionData)
})
module.exports = router;