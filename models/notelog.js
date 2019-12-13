const mongoose = require("mongoose");

// reference to Schema
const Schema = mongoose.Schema;
//creating the new schema object
const noteLogSchema = new Schema({
//getting the title
    title: {
    type: String
    },
//getting the body
    body: {
    type: String,
    required: true
    }

})

//creating the mongoose model
const comments = mongoose.model("Notelog", noteLogSchema);

//exporting the module
module.exports = comments;