const express = require('express');

const friendsController = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log('ip addresss:', req.ip);
    next();
});

friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendID', friendsController.getFriend);

module.exports = friendsRouter;