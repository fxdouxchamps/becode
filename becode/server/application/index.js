const express = require('express');
const application = require('./contracts/application.json')


const router = express.Router();

router.get('', function (req, res) {
  setTimeout(() => res.json(application), 500);
});

module.exports = router
