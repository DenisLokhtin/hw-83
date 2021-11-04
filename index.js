const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const artist = require('./routes/artist');
const track = require('./routes/track');
const album = require('./routes/album');
const upload = require('./routes/routesConfig')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(upload.array());

const port = 8001;

app.use('/album', album);
app.use('/track', track);
app.use('/artist', artist);

const run = async () => {
    await mongoose.connect('mongodb://localhost/music');

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
};

run();


