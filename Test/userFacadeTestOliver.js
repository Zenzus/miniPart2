/*
const expect = require("chai").expect;
const mongoose = require('mongoose');

const dbConnect = require("../dbConnect");
dbConnect(require('../settings.js').TEST_DB_URI);

const User = require('../models/User.js');
const userFacade = require('../facades/UserFacade.js');


describe('Testing userFacade', function () {

    before(async function () {
        // Removes all Users to test it again
        await User.deleteMany({});

        await userFacade.addUsers(
            "username",
            "password",
            "firstname",
            "lastname",
            "testEmail@email.dk"
        );
        await userFacade.addUsers(
            "username2",
            "password2",
            "firstname2",
            "lastname2",
            "testEmail@email.dk2"
        );
        await userFacade.addUsers(
            "username3",
            "password3",
            "firstname3",
            "lastname3",
            "testEmail@email.dk3"
        );
    });

    it('Test if the User is in the DB', async function () {
        var user = await User.find({firstName: "firstname"});
        expect(user[0].lastName).to.be.equal("lastname", "Check for lastname");
        expect(user[0].email).to.be.equal('testEmail@email.dk', "check for email");
    });

    it("Test if you can get all Users", async function () {
        var users = await userFacade.getAllUser();
        expect(users[0].firstName).to.be.equal("firstname");
        expect(users[1].firstName).to.be.equal("firstname2");
        expect(users[2].firstName).to.be.equal("firstname3");
    });

    it("Test if you can find User by username", async function () {
        var user = await userFacade.getUserByName("username2");
        expect(user[0].firstName).to.be.equal("firstname2");
    });

    it("Test if you can add a new user", async function () {
        
        
        var newUser = await userFacade.addUsers(
            "newUsername",
            "newPassword",
            "newFirstName",
            "newLastName",
            "newEmail"
        );
        var foundUser = await userFacade.getUserByName({userName: "newUsername"});
        expect(foundUser[0].to.be.equal(newUser));
    });

    after(function () {
        // at the end of the test do something...
        // dbConnect.prototype.close
        //dbConnect.connection.close()
    });

})
*/