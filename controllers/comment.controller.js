const CommentService = require('../services/comment.service');
const TweetService = require('../services/tweet.service');

class CommentController {
    constructor() {
        // on créé une nouvelle instance de CommentService que l'on ajoute à notre attribut
        this.commentService = new CommentService();
        this.tweetService = new TweetService();
    }

    async create(req, res) {
        const comment = req.body;
        const tweetId = req.params.id;

        // on fera la vérification de l'existence du tweet en Exercice        
        
        const created = await this.commentService.create(tweetId, comment);
        res.redirect('/tweets/'+tweetId);
    }

    async getByTweetId(req, res) {
        const tweetId = req.params.id;

        // on fera la vérification de l'existence du tweet en Exercice

        const comments = await this.commentService.getByTweetId(tweetId);
        res.send(comments);
    }

    async getNewComment(req, res){
        const id = req.params.id;

        const tweet = await this.tweetService.getTweetById(id);
        if(!tweet){
            console.error('error tweet not found with id ', id);
            return res.status(404).send();
        }

        res.render('newComments', { tweet });
    }
}

// on n'oublie pas d'exporter notre Controller
module.exports = CommentController;
