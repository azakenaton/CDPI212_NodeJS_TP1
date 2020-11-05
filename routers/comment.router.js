const express = require('express');
const CommentController = require('../controllers/comment.controller');
const TweetController = require('../controllers/tweet.controller');

// on créé une nouvelle instance de notre controller !
const commentController = new CommentController();
const tweetController = new TweetController();
// on spécifie le router express
const router = express.Router();

// On définis nos routes 
router.post('/api/tweets/:id/comments', async (req, res) => {
    commentController.create(req, res);
});

router.get('/api/tweets/:id/comments', async function (req, res) {
    commentController.getByTweetId(req, res);
});

router.get('/tweets/:id/newComment', async(req, res) => {
    commentController.getNewComment(req,res);
})
// ici pas de classe, on export directement l'objet route
module.exports = router;