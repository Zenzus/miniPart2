const UserFacade = require("./UserFacade");
var Position = require("../models/Position.js");

async function getMyPos(username) {

    let User = await UserFacade.getUserByName(username);
    console.log(User[0]._id);
    return await Position.find({ "user": User[0]._id });

}



async function login(username, password, longitude, latitude, radius) {

    console.log("YOu are inside Login method")
    const User = await UserFacade.getUserByName(username);
    if (User != null) {
        if (User[0].password === password) {
            const coordinates = [longitude, latitude];
            await Position.findOneAndUpdate
                ({ "user": User[0]._id },
                { User, loc: { type: 'Point', coordinates } });
        }

    };
    

        const nearbyFriendsPositions = await findNearbyFriends(
            coordinates,
            distance
        );
    
        return {
            friends: nearbyFriendsPositions.map(friendPos => {
                return {
                    username: friendPos.user.userName,
                    latitude: friendPos.loc.coordinates[0],
                    longitude: friendPos.loc.coordinates[1]
                };
            })
        };
    
   return User;
}

async function findNearbyFriends(coordinates, distance) {
	return await Position.find({
		loc: {
			$near: {
				$geometry: { type: 'Point', coordinates },
				$minDistance: 0.01,
				$maxDistance: distance
			}
		}
	})
		.populate('user')
		.exec();
}


module.exports = { login, getMyPos };
