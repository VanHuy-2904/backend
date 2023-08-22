 const { create } = require('handlebars');
const connection = require('../config/database');
const { json } = require('express');

 const POSTcreateUsers = (req, res) => {
   let hoten = req.body.hoten;
   let email = req.body.email;
   let matkhau = req.body.matkhau;
   console.log('req body: ', 'hoten: ', hoten, 'email: ', email, 'matkhau: ', matkhau)
   if(hoten && email && matkhau) {
      connection.query(
         'Select * from Users where email = ?',[email],
         function(err, results){
            if(results.length>0) {
               res.status(500).json('Email da ton tai')
            }
            else {
               connection.query(
                  'Insert into Users (hoten, email, matkhau) values (?, ?, ?) ', [hoten, email, matkhau],
                  function(err, results){
                     if(err){
                        console.error('Loi he thong', err)
                        res.status(404).json({success: false, message: 'Da xay ra loi'})
                     }
                     else {
                        res.status(200).json('TC')
                     }
                     
                  }
               )
            }
         }
      )
   }
   else {
      res.status(501).json('Vui long nhap thong tin')
   }
}
            

 const GetUsers = (req, res) => {
   connection.query(
      'select * from Users',
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }
   );
 }



 const GetCards = (req, res) => {
   connection.query(
      'select * from Products where MaLoai = "VGA"',
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }
   );
 }
 
 const GetCPUs = (req, res) => {
   connection.query(
      'select * from Products where MaLoai = "CPU"',
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }
   );
 }

 const GetCPUIs = (req, res) => {
   connection.query(
      'select * from Products where MaLoai = "CPU" and Hang = "Intel"',
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }
   );
 }

 const GetCPUAs = (req, res) => {
   connection.query(
      'select * from Products where MaLoai = "CPU" and Hang = "AMD"',
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }
   );
 }


 const ADDCARDS = (req, res) => {
   let TenCard = req.body.name;
   let SoLuong = req.body.SL;
   let GiaBan = req.body.GB;
   let GiaSale = req.body.GBS
   let HinhAnh = req.body.HA;
   let DC = req.body.DC;
   let MaLoai = req.body.ML;
   let Hang = req.body.Hang;


   connection.query(`Insert into Products (title, quantity, price, pricesale, imagecategory, discount, MaLoai, Hang) 
   values (?, ?, ?, ?, ?, ?, ?, ?)`,[TenCard, SoLuong, GiaBan, GiaSale, HinhAnh, DC, MaLoai, Hang],
   function(err, results){
      console.log("Results = ", results);
      if(err) res.status(500).json('Loi he thong')
      res.status(200).json('TC');
   }
   )
 }
 const ADDCART = (req, res) => {
 connection.query(`Insert into Cart (id, title, quantity, price, Thanhtien) 
 values (?, ?, ?, ?, ?)`,[req.body.id, req.body.title, req.body.quantity, req.body.price, req.body.Thanhtien],
 function(err, results){
    console.log("Results = ", results);
    if(err) res.status(500).json('Loi he thong')
    res.status(200).json('TC');
 }
 )
}

 
 const HomeCards = (req, res) =>{
   connection.query(`Select * from Products`, function(err, results){
      if(err) throw err;
      res.render('adminproc.ejs', ({data: results}))
      // res.status(200).json(results)
   })
 }


 const DeleteCard = (req, res) =>{
   connection.query(`Delete from products where id  = ${req.params.id}`,
   function(err){
      if(err) throw err;
      res.redirect('/HomeCards')
   })
   
 }

const GetCart = (req, res) => {
   connection.query(
      'select * from Cart',
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }
   );
 }




 const GetProId = (req, res) => {
   connection.query(
      `select * from Products where id = ${req.params.id}`,
      function(err, result) {
         // console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
        if(err) throw err;
         data ={
            // id:results.Id,
            title:result[0].title,
            quantity:result[0].quantity,
            price:result[0].price,
            pricesale:result[0].pricesale,
            imagecategory:result[0].imagecategory,
            discount:result[0].discount,
            maloai:result[0].MaLoai,
            hang:result[0].Hang


         }
         res.render('edit.ejs', {data})
       }
   );
 }


 const UpdateCard = (req, res) => {
   let TenCard = req.body.name;
   let SoLuong = req.body.SL;

   let GiaBan = req.body.GB;
   let GiaSale = req.body.GBS
   let HinhAnh = req.body.HA;
   let DC = req.body.DC;
   let MaLoai = req.body.ML;
   let Hang = req.body.Hang;
   connection.query(
      `UPDATE products SET title=?,quantity=?,price=?,pricesale=?,imagecategory=?,discount=?,MaLoai=?,Hang=?`,[TenCard, SoLuong, GiaBan, GiaSale, HinhAnh, DC, MaLoai, Hang]
      
      ,
      function(err, result) {
         if(err) throw err
          // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         res.redirect('/HomeCards')
       }
   );
 }





 const getHome = (req, res)=>{
   
   return res.render('home.ejs')
}

 const CreateAccount = (req, res) => {
   res.render('create.ejs')
 }

 const login = (req, res) =>{
   res.render('login.ejs')
 }
const addCard = (req, res)=> {
   res.render('addCard.ejs')
}







 module.exports = {
    getHome, UpdateCard, POSTcreateUsers, GetProId, CreateAccount, GetUsers, login, GetCards, GetCPUs, GetCPUIs, DeleteCard, 
    GetCPUAs, addCard, ADDCARDS, HomeCards, GetCart, ADDCART
 };