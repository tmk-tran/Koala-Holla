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