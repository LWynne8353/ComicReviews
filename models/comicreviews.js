const mongoose = require("mongoose");

// reference to Schema
const Schema = mongoose.Schema;
//creating the new schema object
const comicReviewSchema = new Schema({
//getting the title
    title: {
    type: String,
    required: true
    },
//getting the link
    link: {
    type: String,
    required: true
    },
    noteLog: {
        type: Schema.Types.ObjectId,
        ref: "Logging Notes"
    }
})

//creating the mongoose model
const comics = mongoose.model("Reviews", comicReviewSchema);

//exporting the module
module.exports = comics;
