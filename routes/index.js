// Importing our files containing our routes
const express = require('express')
const notesRouter = require('./notes');

// Create and instance of express so we can apply the middleware and routing
 const app = express();
// http://localhost:3001/api/notes
 app.use("/notes",notesRouter);

 module.exports = app;



