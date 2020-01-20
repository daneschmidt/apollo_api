const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res) => {
    let queryText =
        `SELECT * FROM "mission"
        JOIN "launch_info" ON "mission"."launch_id" = "launch_info"."launch_id"
        JOIN "landing_info" ON "mission"."landing_id" = "landing_info"."landing_id"
        JOIN "crew" ON "mission"."crew_id" = "crew"."crew_id"
        JOIN "orbital_info" ON "mission"."orbit_id" = "orbital_info"."orbit_id"
        JOIN "lunar_info" ON "mission"."lunar_id" = "lunar_info"."lunar_id"
        WHERE "mission"."mission_id" = $1;`;

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