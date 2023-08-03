var express = require('express');
var router = express.Router();
const { connectToDatabase } = require('./dbConnection');

const { DateTime } = require('luxon');

/* GET home page. */
router.post('/', function(req, res, next) {
    return res.status(200).json({ message: "here is the message"});
});


router.post('/login', async function(req, res, next) {

    try {
        const { client, mongoose,dbo } = await connectToDatabase();

        login = req.body.login;
        mdp = req.body.mdp;
        console.log(login);

        var collection =  dbo.collection("utilisateur");
      var test = await collection.findOne({ email: login, mdp: mdp});
        console.log(test);
      let data = {}
        if (test == null){
          return res.status(401).json({ result:"error",message: "login ou mot de passe erroner" });
        }else{
           data = { "_id": test._id, "nom": test.nom, "prenom": test.prenom, "email": test.email }
          // Get the current date and time
          const currentDate = DateTime.local();

          // Print the current date in a specific format (e.g., 'yyyy-MM-dd')
          // console.log(currentDate.toFormat('yyyy-MM-dd'));

          const futureDate = currentDate.plus({ days: 5 });

          const collectionToken = dbo.collection("token");
          var newToken = {
            utilisateur: test._id,
            date:futureDate.toFormat('yyyy-MM-dd'),
          };
          
          var test = await collectionToken.insertOne(newToken, function(err, result) {
            if (err) {
                return res.status(500).json({ message: "error1 while doing an insert of token" });
            } else {
              return result;
            }
          });
          await mongoose.disconnect();
           user = {}
      }

      return res.status(200).json({ message: "mety", token: test, "data": data });
        
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
          dtn: dtn,
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
