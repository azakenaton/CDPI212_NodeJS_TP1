const TweetService = require('../services/tweet.service');
const CommentService = require('../services/comment.service');
const RandomUserApi = require('../api/randomuser.api');

class TweetController {
    constructor() {
        this.tweetService = new TweetService();
        this.commentService = new CommentService();
        this.randomUserApi = new RandomUserApi();
    }

    async create(req,res){
        const tweet = req.body;

        const tweetCreated = await this.tweetService.create(tweet);
        res.redirect('/tweets');
    }

    async getAllTweet(req,res){
        const tweets = await this.tweetService.getAllTweet();
        res.render('tweets', { tweets });
    }

    async getTweetById(req,res){
        const id = req.params.id;

        const tweet = await this.tweetService.getTweetById(id);
        if(!tweet){
            console.error('error tweet not found with id ', id);
            return res.status(404).send();
        }
        const comments = await this.commentService.getByTweetId(id);
        const users = await this.randomUserApi.getRandomUsers(3);
        res.render('tweet', { tweet, comments, users });
    }
}

// on n'oublie pas d'exporter notre Controller
module.exports = TweetController;