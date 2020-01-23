const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const secretkey = process.env.API_KEY;

router.get('/', (req, res) => {

    let queryText =
        `SELECT "mission_name", "mission_objectives" FROM "mission"
    ORDER BY "mission_name" ASC;`;

    pool.query(queryText)
         .then(results => {
             res.send(results.rows);
         })
         .catch(error => {
             console.log(`couldn't get data`, error);
             res.sendStatus(500);
         })
});

router.get('/:apiKey', (req, res) => {
    

    let queryText =
        `SELECT * FROM "mission"
    JOIN "launch_info" ON "mission"."launch_id" = "launch_info"."launch_id"
    JOIN "landing_info" ON "mission"."landing_id" = "landing_info"."landing_id"
    JOIN "crew" ON "mission"."crew_id" = "crew"."crew_id"
    JOIN "orbital_info" ON "mission"."orbit_id" = "orbital_info"."orbit_id"
    JOIN "lunar_info" ON "mission"."lunar_id" = "lunar_info"."lunar_id"
    ORDER BY "mission_name" ASC;`;

    const apiKeyCheckQuery = `SELECT * FROM "user" WHERE "api_key"=$1`;

    pool.query(apiKeyCheckQuery, [req.params.apiKey])
        .then((response) => {
            if (response.rows.length == 1) {
                pool.query(queryText)
                    .then(results => {
                        res.send(results.rows);
                        console.log('reqDOTquery',(req.query));
                        console.log('apikey=',secretkey);
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
        `SELECT * FROM "mission"
        JOIN "launch_info" ON "mission"."launch_id" = "launch_info"."launch_id"
        JOIN "landing_info" ON "mission"."landing_id" = "landing_info"."landing_id"
        JOIN "crew" ON "mission"."crew_id" = "crew"."crew_id"
        JOIN "orbital_info" ON "mission"."orbit_id" = "orbital_info"."orbit_id"
        JOIN "lunar_info" ON "mission"."lunar_id" = "lunar_info"."lunar_id"
        WHERE "mission"."mission_id" = $1;`;

    const apiKeyCheckQuery = `SELECT * FROM "user" WHERE "api_key"=$1`;

    ///MYRON IDEA FOR APIKEY HANDLING///
    //req.query  - get query strings in JS req.query.api

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