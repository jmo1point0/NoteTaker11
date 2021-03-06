const express = require('express');
const uuid = require('uuid');
const app = express();
const apiroutes = require('./routes/apiroutes')

const PORT = process.env.PORT || 3000; 

// will share any static html files with the browser
app.use( express.static('public') );
// accept incoming POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dbFile = './app/db.json';

let noteList = [{id: "0000-0000-0000-0000", title: 'note1', text: 'note1 text'}];

// Endpoints =================================================

// you will need to create 3 endpoints here, and it should work magically :)
// note: for app.post: newNote.id = uuid.v4() // use a random unique id.
// ... code away ...
app.use(apiroutes)


// Listener ==================================================
app.listen(PORT, function() {
    console.log(`Serving notes on PORT ${PORT}`)
})
