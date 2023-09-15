const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST

router.post("/", (req, res) => {
    const koala = req.body;
    console.log("Adding Koala", koala);
    let queryText = `INSERT INTO "koalas" ("name", "gender", "age", "ready", "notes") 
                        VAlUES ($1, $2, $3, $4, $5);`
   // backend validation
  if (!koala.name || !koala.gender || !koala.age || !koala.ready || !koala.notes) {
  res.sendStatus(400);
  return;
  } 
  pool
  .query(queryText, [koala.name, koala.gender, koala.age, koala.ready, koala.notes])
  .then((result) => {
    res.sendStatus(201);
  })
  .catch((error) => {
    console.log(`Error adding new Koala`, error);
    res.sendStatus(500);
  }); 
})

// PUT


// DELETE


module.exports = koalaRouter;