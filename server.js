const express = require('express');

// Import our files containing our routes
const notesRouter = require('./note');


// Create and instance of express so we can apply the middleware and routing
const app = express();

app.use( notesRouter);


module.exports = app;
