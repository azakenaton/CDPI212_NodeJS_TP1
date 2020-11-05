const mongoose = require('mongoose');

async function connect() {
    // on se connecte à la base de données
    try {
        // changer ici le password pour mettre celui que vous aviez copier + l'url de votre cluster !!
        await mongoose.connect('mongodb+srv://Admin:2uOvaEVmGW0BCU7q@firstcluster.jrlpb.mongodb.net/tweetjs?retryWrites=true&w=majority', { useNewUrlParser: true });
    } catch (err) {
        console.error('impossible de se connecter à la base de donnée', err);
        throw err;
    }

    console.info('connection to the database established...');
}

// on export ici la fonction connect
module.exports = connect;