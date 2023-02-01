//referencing the api routes//

const router = require('express').Router();
const routeAPI = require('./api');

//using the api routes//
router.use('/api', routeAPI);
// 404 error message//
router.use((req, res) => res.send('<h1> Oh Jesus its a 404 Error!</h1>',),);



module.exports = router;