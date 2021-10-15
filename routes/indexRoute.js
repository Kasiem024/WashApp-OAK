'use strict';

const express = require('express');
const router = express.Router();

const index_controller = require('../controller/homeController');

router.get('/', index_controller.index);
router.get('/home', index_controller.home);
router.get('/boka', index_controller.boka);
router.get('/errorreport', index_controller.errorreport);
router.get('/create', index_controller.create);
router.get('/newPassword', index_controller.newPassword);
router.get('/kem', index_controller.kem);
// router.get('/create', index_controller.create);




module.exports = router;