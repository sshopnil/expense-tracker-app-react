const express = require('express');

const router = express.Router();

const {add_user} = require('../services/user.services');

router.post('/add-user', add_user);

module.exports = router;
