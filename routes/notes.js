const notes = require('express').Router();
const uuid = require('../helpers/uuid');
const fs = require('fs');


// http://localhost:3001/api/notes/
//GET /api/notes  read the db.json file and return all saved notes as JSON.
notes.get('/', (req, res) => {
  console.info(`${req.method} note maker`);
  fs.readFile('./db/db.json', 'utf8', function (error, data) { res.json(JSON.parse(data)) });
})

//POST /api/notes receive a new note to save on the request body, add it to the db.json file,
// and then return the new note to the client. 

notes.post('/', (req, res) => {
  console.log(`${req.method} request received`)
  const { title, text } = req.body;


  const newNote = {
    title,
    text,
    id: uuid(),

  };

  fs.readFile('./db/db.json', 'utf8', function (error, data) {
    const newData = JSON.parse(data)
    newData.push(newNote)



    // Convert the data to a string so we can save it
    const noteString = JSON.stringify(newData)

    // Write the string to a file
    fs.writeFile(`./db/db.json`, noteString, (err) =>
      err
        ? console.error(err)
        :


        res.json(newData)
    );
  })
})






module.exports = notes;