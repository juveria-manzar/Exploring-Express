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
module.exports = router;