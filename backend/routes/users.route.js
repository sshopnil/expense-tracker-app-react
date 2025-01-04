const express = require('express');

const router = express.Router();

const {add_user, login} = require('../services/user.services');

router.post('/add-user', add_user);
router.get('/login/:email', login);

module.exports = router;
