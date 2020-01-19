const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/api/mission/:id', (req, res) => {

    let id = req.params.id;

    // let queryText =
    // `SELECT "mission_patch" FROM "mission"
    // WHERE "id" = $1;`;

    let queryText =
    `SELECT * FROM "mission";`;

    pool.query(queryText, )
        .then(results => {
            res.send(results.rows);
        })
        .catch(error => {
            console.log(`couldn't get data`, error);
            res.sendStatus(500);
        })

    // pool.query(queryText, [id])
    //     .then(results => {
    //         res.send(results.rows);
    //     })
    //     .catch(error => {
    //         console.log(`couldn't get data`, error);
    //         res.sendStatus(500);
    //     })

});


module.exports = router;