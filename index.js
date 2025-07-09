const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes/notes.js')

app.use(express.json());
app.use('/notes', routes);

app.listen(PORT,()=>console.log("Auth server running on port " + PORT));