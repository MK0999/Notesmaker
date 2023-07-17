
// Importing our files containing our routes
const express = require('express')
const notesRouter = require('./notes');

// Create and instance of express so we can apply the middleware and routing
 const app = express();

 app.use(notesRouter);

 module.exports = app;

