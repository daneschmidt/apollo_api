const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
    let queryText =
    `SELECT "mission_overview" FROM "mission"
    ORDER BY "crew_id" DESC;`;

    pool.query(queryText)
        .then(results => {
            res.send(results.rows);
        })
        .catch(error => {
            console.log(`couldn't get movie`, error);
            res.sendStatus(500);
        })

});


module.exports = router;