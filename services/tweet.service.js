const Tweet = require('../models/tweet');

class TweetService {
    constructor() {}

    async create(tweet){
        const newTweet = new Tweet({
            title: tweet.title,
            content: tweet.content,
            user: tweet.user,
            createdAt: new Date(),
        });

        await newTweet.save();
        return newTweet;
    }

    async getAllTweet(){
        return await Tweet.find({}).sort({ createdAt: -1 });
    }

    async getTweetById(tweetId){
        return await Tweet.findById(tweetId);
    }

}

// on n'oublie pas d'exporter notre Service
module.exports = TweetService;