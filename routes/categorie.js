var express = require('express');
var router = express.Router();

const { connectToDatabase } = require('./dbConnection');

router.get('/', function(req, res, next) {
    return res.status(200).json({ message: "here is the message"});
});

router.get('/all',async function(req, res, next) {

    const { client, mongoose,dbo } = await connectToDatabase();

    const collection = dbo.collection("categorie");
    var listeCategorie = await collection.find({}).toArray();

    console.log(listeCategorie);
    
    return res.status(200).json({ message: "mety",categories :listeCategorie});
});

module.exports = router;