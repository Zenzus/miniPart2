var connect = require("../dbConnect.js");
//connect(require("../settings").DEV_DB_URI);

var User = require("../models/User.js");

async function addUser(firstName, lastName , userName, password, email) {

    var user = new User
     ({
        firstName,
        lastName,
        userName,
        password,
        email,
      
    });
    await user.save();
    return user;
}


async function getAllUsers(){
   
    return await User.find({});
}

async function getUserByName(userName){


   
    return await User.find({"userName" : userName});
}

async function deleteUser(userName){
   return await User.deleteOne({"userName" : userName});
}

module.exports = 
{
    addUser,
    getAllUsers,
    getUserByName,
    deleteUser
}