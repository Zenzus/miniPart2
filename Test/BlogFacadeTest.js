const expect = require('chai').expect;

const dbConnect = require("../dbConnect");
dbConnect(require('../settings.js').TEST_DB_URI);

const Blogs = require('../models/LocationBlog.js');
const User = require('../models/User.js');
const blogFacade = require('../facades/blogFacade.js');

describe("Testing the BlogFacade", function () {

    var log;

    before(async function (done) {
        done()
    });


    it("Creating Log", async function () {


        let userID = await User.find({ firstName: "Find" }).select({ _id: 1 }).exec()
            .then((data) => {
                if (data != []) {
                    console.log("What is in data " + data[0]);
                    return data[0]

                } else {
                    throw Error("User you where looking for is in another castle")
                }

            })
            .catch((err) => err);
        console.log("What is in user:" + userID);
        let log = await blogFacade.addLocationBlog
            (
            "This is a blog about a place",
            { longitude: 50, latitude: 13 },
            u
            )
            .catch((err) => { throw err });


        expect(log.author).to.be.equal(userID);
    })


})

