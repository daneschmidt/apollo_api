const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/api/mission/:data', (req, res) => {

    let flightDetails = req.params.data;

    let queryText =
    `SELECT * FROM "mission"
    JOIN "launch_info" ON "mission"."launch_id" = "launch_info"."launch_id"
    WHERE "mission".id = ${flightDetails};`;

    pool.query(queryText)
        .then(response => {
            res.send(response.rows);
        })
        .catch(error => {
            console.log(`couldn't get data`, error);
            res.sendStatus(500);
        })

});


module.exports = router;