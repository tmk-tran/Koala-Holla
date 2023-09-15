const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET
Router.get("/", (req, res) =>{
    console.log('GET request made to /koalas/');
    const queryText = `SELECT * FROM "koalas";`;

    pool
    .query(queryText)
    .then((response)=> res.send(response.rows))
    .catch((err) => {
        console.log("Error in GET request", err);
        res.sendStatus(500)
    });
});

// POST


// PUT


// DELETE

module.exports = koalaRouter;