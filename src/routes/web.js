const express = require('express');
const {getHome, POSTcreateUsers, CreateAccount, GetData, login, GetSP, addCard, ADDCARDS, HomeCards} = require('../controllers/homeController');
const {dangnhap} = require('../controllers/login')
const router = express.Router();
const connection = require('../config/database');



router.get('/', getHome)
router.post('/create-users', POSTcreateUsers)
router.get('/create', CreateAccount)
router.get('/api/data', GetData)
router.get('/login', login)
router.post('/logins', dangnhap)
router.get('/api/Cards', GetSP)
router.get('/add-Card', addCard) // PAGE ADD CARD
router.post('/add-card-result', ADDCARDS) // Hiển thị kết quả add Card
//Home Products
router.get('/HomeCards', HomeCards) // Home hiển thị sản phẩm

  module.exports = router;