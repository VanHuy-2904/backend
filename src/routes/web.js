const express = require('express');
const {getHome, POSTcreateUsers, CreateAccount, GetData, login} = require('../controllers/homeController');
const {dangnhap} = require('../controllers/login')
const router = express.Router();

router.get('/', getHome)
router.post('/create-users', POSTcreateUsers)
router.get('/create', CreateAccount)
router.get('/api/data', GetData)
router.get('/login', login)
router.post('/logins', dangnhap)

  module.exports = router;