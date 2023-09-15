const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST


// PUT
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const koala = req.body;
    let queryText;
    console.log("UPDATE koala in /koala with id:", id);
    queryText = `UPDATE "koalas" SET "ready" = ${koala.ready} WHERE "id" = $1;`;
    pool.query(queryText, [id])
    .then(() => {
        res.sendStatus(204); // 204 no content
      })
      .catch((err) => {
        console.log("error in UPDATING koala from koalas table", err);
        res.sendStatus(500);
    });
})

// DELETE



module.exports = koalaRouter;