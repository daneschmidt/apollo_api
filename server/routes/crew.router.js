const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
    let queryText =
    `SELECT * FROM "mission"
    JOIN "crew" ON "mission"."crew_id" = "crew"."crew_id"
    ORDER BY "mission_name" DESC;`;

    pool.query(queryText)
        .then(results => {
            res.send(results.rows);
        })
        .catch(error => {
            console.log(`couldn't get movie`, error);
            res.sendStatus(500);
        })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;