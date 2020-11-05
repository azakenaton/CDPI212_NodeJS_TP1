const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// le schéma structure le document que l'on va utiliser sur notre projet
// on y définit les champs et les types !!
const commentSchema = new Schema({
    user: String,
    comment: String,
    createdAd: Date,
    tweetId: ObjectId
});

module.exports = mongoose.model('comment', commentSchema);