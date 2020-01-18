const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/api/mission/:launchId', (req, res) => {

    let launchId = req.params.data;
    
});


module.exports = router;