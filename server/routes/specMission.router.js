const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/api/mission/:id', (req, res) => {

    const launchId = req.params.id;

    let queryText =
    `SELECT * FROM "mission"
    JOIN "launch_info" ON "mission"."launch_id" = "launch_info"."launch_id"
    WHERE "mission".id =${launchId};`;

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