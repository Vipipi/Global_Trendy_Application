const express = require('express');
const router = express.Router();
const path = require('path');

/* GET index page. */
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../../client/build/') });
});

module.exports = router;