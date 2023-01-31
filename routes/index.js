const router = require('express').Router();
const routeAPI = require('./api');

router.use('/api', routeAPI);

router.use((req, res) => {
    res.status(404).send('<h1> Oh Jesus its a 404 Error!</h1>',);
});

module.exports = router;