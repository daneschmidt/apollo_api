const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:apiKey', (req, res) => {

    let queryText =
        `SELECT * FROM "launch_info"
    ORDER BY "launch_id" DESC;`;

    const apiKeyCheckQuery = `SELECT * FROM "user" WHERE "api_key"=$1`;

    pool.query(apiKeyCheckQuery, [req.params.apiKey])
        .then((response) => {
            if (response.rows.length == 1) {
                pool.query(queryText)
                    .then(results => {
                        res.send(results.rows);
                    })
                    .catch(error => {
                        console.log(`couldn't get mission info`, error);
                        res.sendStatus(500);
                    });
            } else {
                res.sendStatus(401);
            }
        })
        .catch((err) => {
            console.warn(err);
            res.sendStatus(500);
        })

});

router.get('/:id/:apiKey', (req, res) => {

    let queryText =
        `SELECT * FROM "launch_info"
    WHERE "launch_id" =$1;`;

    const apiKeyCheckQuery = `SELECT * FROM "user" WHERE "api_key"=$1`;

    pool.query(apiKeyCheckQuery, [req.params.apiKey])
        .then((response) => {
            if (response.rows.length == 1) {
                pool.query(queryText, [req.params.id])
                    .then(results => {
                        res.send(results.rows);
                    })
                    .catch(error => {
                        console.log(`couldn't get mission info`, error);
                        res.sendStatus(500);
                    });
            } else {
                res.sendStatus(401);
            }
        })
        .catch((err) => {
            console.warn(err);
            res.sendStatus(500);
        })

});


module.exports = router;