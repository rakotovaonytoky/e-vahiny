var express = require('express');
var router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');

const { connectToDatabase } = require('./dbConnection');

router.get('/', function(req, res, next) {
    return res.status(200).json({ message: "here is the message"});
});

router.get('/all',async function(req, res, next) {

    const { client, mongoose,dbo } = await connectToDatabase();

    const collection = dbo.collection("tourisme");
    var listeTourisme = await collection.find({}).toArray();

    console.log(listeTourisme);
    
    return res.status(200).json({ message: "mety",tourismes :listeTourisme});
});

router.get('/byCateg',async function(req, res, next) {

    const { client, mongoose,dbo } = await connectToDatabase();
    var categId = req.body.categ;
    // categId = new ObjectId(categId);
    const collection = dbo.collection("tourisme");
    var listeTourisme = await collection.find({categorie:categId}).toArray();

    console.log(listeTourisme);
    
    return res.status(200).json({ message: "mety",tourismes :listeTourisme});
});

module.exports = router;