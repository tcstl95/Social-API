const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const db = require('./config/connection');
const cwd = process.cwd();


const PORT =  3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-api', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(PORT, () => console.log(`You did it! Connected on localhost:${PORT}`));