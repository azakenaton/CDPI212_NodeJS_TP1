// on récupére notre dépendance externe.
const express = require('express');
const logger = require('morgan');
const path = require('path');
const tweets = require ('./tweet.json');
const { v4: uuidv4 } = require('uuid');

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
app.set('views', path.join(__dirname, 'views'));

// notre première route !
// on envoi un Hello World si la requête est sur la racine.
// Sans moteur de template
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html');
// });

// Avec moteur de template 
app.get('/', (req, res) => {
    res.render('index', { name: 'Luc' });
});

app.get('/tweets', (req, res) => {
    res.render('tweets', { tweets: tweets, name: 'Luc' });
});

app.post('/tweets', (req, res) => {
    const body = req.body;
    tweets.push(body);
    res.redirect('/tweets');
});

app.get('/tweets/new', (req, res) => {
    res.render('new');
});

app.get('/tweets/:id', function(req, res) {
    const id = req.params.id;
    
    const tweet = tweets.find((elem) => {
        return elem.id === id; 
    });

    res.render('tweet', { tweet });
});


// on écoute sur notre port.
app.listen(port, () => {
  console.log(`TweetJS listening at http://localhost:${port}`)
});