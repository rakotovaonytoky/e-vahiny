var express = require('express');
var router = express.Router();
// const dbo = require("./dbConnection");
const User = require("../model/userShema");
const { connectToDatabase } = require('./dbConnection');
// const { client, mongoose } = await connectToDatabase();

/* GET home page. */
router.get('/', function(req, res, next) {
    return res.status(200).json({ message: "here is the message"});
});


router.post('/login', async function(req, res, next) {

    try {
        const { client, mongoose,dbo } = await connectToDatabase();

        login = req.body.login;
        console.log(login);

        // var newUser = {
        //     name: "John Doe",
        //     age: 30,
        //     login: "mylogin",
        //     mdp:"password"
        //   };

        //   const options = {
        //     writeConcern: {
        //       w: 1, // Number of acknowledgments
        //       j: true, // Wait for journal commit
        //       wtimeout: 2000, // Custom timeout in milliseconds
        //     },
        //   };
        // const collection = dbo.collection("utilisateur");
        // await collection.insertOne(newUser, function(err, result) {
        //   if (err) {
        //       return res.status(500).json({ message: "error1 while doing an insert" });
        //   } else {
        //       return res.status(200).json({ message: "insert effectue" });
        //   }
        // });
        // const result = await collection.find({}).toArray();
        // console.log(result);

        // await mongoose.disconnect();
        return res.status(200).json({ message: "mety"});
    
        
        
      } catch (error) {
        // Handle the error here
        console.error("Error while connecting to the database:", error);
      }
    
    
});

router.post('/inscription', async function(req, res, next) {

  try {
      const { client, mongoose,dbo } = await connectToDatabase();

      nom = req.body.nom;
      prenom = req.body.prenom;
      email = req.body.email;
      dtn = req.body.dtn;
      login = req.body.login;
      mdp = req.body.mdp;
      

      var newUser = {
          nom: nom,
          prenom: prenom,
          email: email,
          login:login,
          mdp:mdp
        };

        const options = {
          writeConcern: {
            w: 1, // Number of acknowledgments
            j: true, // Wait for journal commit
            wtimeout: 2000, // Custom timeout in milliseconds
          },
        };
      const collection = dbo.collection("utilisateur");
      var test = await collection.insertOne(newUser, function(err, result) {
        if (err) {
            return res.status(500).json({ message: "error1 while doing an insert" });
        } else {
          return result;
        }
      });
      await mongoose.disconnect();
      return res.status(200).json({ message: "mety"});
  
    } catch (error) {
      // Handle the error here
      console.error("Error while connecting to the database:", error);
    }
  
  
});

module.exports = router;
