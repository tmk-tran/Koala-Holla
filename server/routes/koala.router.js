const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST

router.post("/", (req, res) => {
    const koala = req.body;
    console.log("Adding Koala", koala);
    let queryText = `INSERT INTO "koalas" ("author", "title", "isRead") `
})


// PUT


// DELETE

module.exports = koalaRouter;