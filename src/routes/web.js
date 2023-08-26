const express = require('express');
const {getHome, ADDCART, POSTcreateUsers,  CreateAccount,GetProId, UpdateCard, GetUsers, login, DeleteCard, GetCards, GetCPUs, GetCPUIs, GetCPUAs, addCard, ADDCARDS, 
  HomeCards, GetCart, Xoamh}= require('../controllers/homeController');
const {dangnhap} = require('../controllers/login')
const{InsertCart} = require('../controllers/cartController')
const router = express.Router();
const connection = require('../config/database');
const { Router } = require('express');



router.get('/', getHome) // Trang chủ
router.get('/create', CreateAccount) // Trang sigin up
router.post('/create-users', POSTcreateUsers) // Thông báo trạng thái đăng ký
router.get('/login', login) // Trang đăng nhập
router.post('/logins', dangnhap) // Thông báo trạng thái đăng nhập
router.get('/add-Card', addCard) // PAGE ADD CARD
router.post('/add-card-result', ADDCARDS) //  add Card
router.get('/HomeCards', HomeCards) // Home hiển thị sản phẩm
router.get('/delete/:id', DeleteCard) // Xóa sản phẩm
router.get('/edit/:id', GetProId)// In ra thong tin san pham can update
router.post('/update', UpdateCard)
router.get('/cart', ADDCART) // them vao gio hang
router.post('/delete-cart', Xoamh)
router.get('/update-cart', InsertCart)
// router.get('/timkiem', tkiem)
  module.exports = router;