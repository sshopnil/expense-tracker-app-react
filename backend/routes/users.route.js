const express = require('express');

const router = express.Router();

const {add_user, login} = require('../services/user.services');

router.post('/add-user', add_user);
router.post('/login/:email', login);

module.exports = router;
