const express = require('express');
const TweetController = require('../controllers/tweet.controller');
const CommentController = require('../controllers/comment.controller');

// on créé une nouvelle instance de notre controller !
const tweetController = new TweetController();
const commentController = new CommentController();
// on spécifie le router express
const router = express.Router();

router.get('/tweets', async (req, res) => {
    tweetController.getAllTweet(req, res);
});

router.post('/tweets', async (req, res) => {
    tweetController.create(req,res);
});

router.get('/tweets/new', (req, res) => {
    res.render('new');
});

router.get('/tweets/:id', async(req, res) => {
    tweetController.getTweetById(req,res);
});
// ici pas de classe, on export directement l'objet route
module.exports = router;