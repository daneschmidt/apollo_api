const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    
    let queryText =
    `SELECT * FROM "crew"
    WHERE "crew"."crew_id" =$1;`;




    pool.query(queryText, [req.params.id])
        .then(results => {
            res.send(results.rows);
        })
        .catch(error => {
            console.log(`couldn't get data`, error);
            res.sendStatus(500);
        })

});

module.exports = router;