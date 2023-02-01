// Referencing mongoose and express//
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// establish 3001 port//
const PORT =  process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

// creating connection to mongoose//
mongoose.createConnection(process.env.MONGODB_URI || 'mongodb://localhost/Social-API', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);
// listening to localhost port//
app.listen(PORT, () => console.log(`You did it! Connected on http://localhost:${PORT}`));
