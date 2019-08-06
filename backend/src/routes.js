const express = require('express');
const DevConstroller = require('./controllers/DevController');
const LikeConstroller = require('./controllers/LikeController');
const DislikeConstroller = require('./controllers/DislikeController');


const routes = express.Router();


routes.get('/devs', DevConstroller.index);
routes.post('/devs', DevConstroller.store);
routes.post('/devs/:devId/likes', LikeConstroller.store);
routes.post('/devs/:devId/dislikes', DislikeConstroller.store);

module.exports = routes;