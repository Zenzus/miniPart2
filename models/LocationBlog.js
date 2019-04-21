
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LocationBlogSchema = new Schema({
    info : {type: String, required: true},
    image: String,
    pos: {
        longitude: {type: Number, required: true},
        latitude: {type: Number, required: true}
    },
    author: {type: Schema.Types.ObjectId, ref:"User", required: true},
    likedBy: [Schema.Types.ObjectId],     //Why not ref likedBy like we did in author? cuz we're out of time...
    created: {type: Date, default: Date.now},
    lastUpdated: Date,
})

LocationBlogSchema.virtual("likedByCount").get(function() {
    return this.likedBy.length;
})


LocationBlogSchema.pre("update", function(next) {
    this.update({}, {$set: {lastUpdated : new Date()}})
    next(); //We have to add this otherwise Mongoose wont go beyond this function (basically, add this or it stops here)
})

var LocationBlog = mongoose.model("LocationBlog", LocationBlogSchema);
module.exports = LocationBlog;
