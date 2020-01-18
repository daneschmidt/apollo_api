const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/api/mission/:data', (req, res) => {

    let details = req.params.data;

    let queryText =
    `SELECT "mission_patch" FROM "mission"
    ORDER BY "crew_id" DESC;`;

    pool.query(queryText)
        .then(results => {
            res.send(results.rows);
        })
        .catch(error => {
            console.log(`couldn't get data`, error);
            res.sendStatus(500);
        })

});


module.exports = router;