const express = require('express');
const mongoose = require('mongoose');
const app = express();


const PORT =  process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));


mongoose.createConnection(process.env.MONGODB_URI || 'mongodb://localhost/Social-API', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`You did it! Connected on http://localhost:${PORT}`));
