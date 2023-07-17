const notes = require('express').Router();
const uuid = require('./helpers/uuid');
const fs = require('fs');


//GET /notes should return the notes.html file.






//GET /api/notes should read the db.json file and return all saved notes as JSON.
notes.get('/api/notes' , (req,res) => {
console.info(`${req.method} note maker`);
fs.readfile('./db/db.json', 'utf8', function(error,data) { res.json(JSON.parse(data))});
})

//POST /api/notes should receive a new note to save on the request body, add it to the db.json file,
// and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved .

notes.post('/api/notes' , (req,res) => {
    console.log(`${req.method} request received`)
const{title,text} = req.body;

if(title && text){
    const newNote = {
        title,
        text,
        id 

    };

        // Convert the data to a string so we can save it
    const noteString = JSON.stringify(newNote)

    // Write the string to a file
    fs.writeFile(`./db/${newNote.title}.json`,noteString, (err) =>
      err
        ? console.error(err)
        : console.log(
            `Note for ${newNote.title} has been written to JSON file`
          )
    );


    const response = {
        status: 'success',
        body: newNote,
      };
  
      console.log(response);
      res.status(201).json(response);
    } else {
      res.status(500).json('Error in posting NOTES');
    }
  });




//GET * should return the index.html file.

module.exports = notes;