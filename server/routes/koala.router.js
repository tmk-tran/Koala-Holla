const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST


// PUT


// DELETE
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    console.log("DELETE route in /koala with id of:", id);
    // sanitize queryText
    const queryText = `DELELE FROM "koalas" WHERE "id" = $1;`;
    pool
    .query(queryText, [id])
    .then(() => {
        res.sendStatus(204); // 204 no content
      })
    .catch((err) => {
        console.log("error in DELETing songs from books table", err);
        res.sendStatus(500);
    });
    
})

module.exports = koalaRouter;