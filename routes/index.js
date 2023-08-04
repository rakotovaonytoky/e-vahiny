var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/health', function(req, res, next) {
  console.log('GET health');
  const getHealth = async (req, res) => {
    return res.status(200).json({
      message: "Server is alive, don't worry my friend 🙂",
    });
  };
  res.status(200).json({
    message: "Server is alive, don't worry my friend 🙂",
  });
  // res.render('index', { title: 'Express' });
});

const getHealth = async (req, res) => {
  return res.status(200).json({
    message: "Server is alive, don't worry my friend 🙂",
  });
};

module.exports = router;
