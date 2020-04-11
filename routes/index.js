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

router.get('/users', function(req, res) {
    let msg = { msg: "Finding all users" }
    let filters = []
    let role = req.query.role || "";
    let recentSubs = req.query.new || "";

    role && (filters.push({ role: role }))
    recentSubs && (filters.push({ recent_subscribers: true }))

    if (filters.length) {
        msg.filters = filters;
        msg.msg = "Finding users with a filter"
    }
    res.json(msg)
})

router.get("/users/:userid", function(req, res) {
    let id = req.params.userid;
    res.json(`Getting user with id: ${id}`)
})

router.get('/examples', function(req, res) {

    let data = {
        title: "EJS Example",
        body: "Lorem ipsum dolor sit amet dis eleifend amet rutrum imperdiet penatibus. Viverra vel sem rutrum consequat semper amet aenean sed nullam a ante quis. Nascetur sem nec aliquet nisi faucibus venenatis enim. Tellus ullamcorper massa. Eu eget cum vidi ipsum vivamus elementum sociis ant",
        backend: ["Express", "MVC", "MongoDB", "RESTful API"],
        frontend: {
            markup: "HTML",
            styles: "Sass",
            scripts: "JavaScripts",
            frameworks: {
                css: "Bootstrap",
                spa: "Angular"
            }
        }
    }

    res.render('ejs-example', data)
})
module.exports = router;