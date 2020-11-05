// on récupére notre dépendance externe.
const express = require('express');
const logger = require('morgan');
const connect = require('./database/mongodb');
const commentRouter = require('./routers/comment.router');
const tweetRouter = require('./routers/tweet.router');

// on se connecte
connect()

// on construit notre application qui nous servira à créer nos routes
const app = express();
// on donne un port sur lequel notre serveur écoute
const port = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());

// Moteur de template
app.set('view engine', 'hbs');
// on indique que nos vues se trouverons toujours dans le dossier views 
// app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/', commentRouter);
app.use('/', tweetRouter);

// on écoute sur notre port.
app.listen(port, () => {
  console.log(`TweetJS listening at http://localhost:${port}`)
});