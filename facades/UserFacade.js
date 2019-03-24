var connect = require("../dbConnect.js");
//connect(require("../settings").DEV_DB_URI);

var User = require("../models/User.js");

async function addUsers(firstName, lastName , userName, password, email) {

    var user = new User
     ({
        firstName,
        lastName,
        userName,
        password,
        email,
      
    });
    await user.save();
  
}


async function getAllUser(){
   
    return await User.find({});
}

async function getUserByName(userName){

    return await User.find({"userName" : userName});
}

module.exports = 
{
    addUsers,
    getAllUser,
    getUserByName,
}