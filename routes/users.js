var express = require('express');
var router = express.Router();

var userFacade = require('../facades/userFacade');
var loginFacade = require('../facades/LoginFacade')

/* GET users listing. */
router.get('/all', async function (req, res, next) {
    var users = await userFacade.getAllUsers();

    res.json(users);
});

router.get('/:username', async function (req, res, next) {
    var username = req.params.username;
    var user = await userFacade.getUserByName(username);
    res.json(user);
});


router.get('/Loc/:username', async function (req, res, next) {

    var username = req.params.username;

    let myPos = await loginFacade.getMyPos(username);
    console.log(myPos);
    res.json(myPos);


})

router.post('/login', async function (req, res, next) {

    console.log(req.body);
    var userName = req.body.userName;
    var password = req.body.password;
    var latitude = req.body.latitude;
    var longtitude = req.body.longtitude;
    var radius = req.body.radius;
   

    //This is a promise
    var user = await loginFacade.login(userName, password, latitude, longtitude, radius);


    if (user.msg) {
		res.statusCode = 403;
    }
    
    res.json(user);




});

router.post('/add', async function (req, res, next) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var userName = req.body.userName;
    var password = req.body.password;
    var email = req.body.email;

    var user = await userFacade.addUser(firstName, lastName, userName, password, email)
        .then((data) => {
            return data
        })
        .catch((err) => {
            res.json(err.toString());
        });
    // returns the user
    console.log(user);
    res.json(user);
});

module.exports = router;