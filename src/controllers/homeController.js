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
            

 const GetData = (req, res) => {
   connection.query(
      'select * from Users',
      function(err, results) {
         console.log("Results = ", results); // results contains rows returned by server
         // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         
          res.status(200).json(results)
       }
   );
 }



 const GetSP = (req, res) => {
   connection.query(
      'select * from CardDoHoa',
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
   let HinhAnh = req.body.HA;


   connection.query(`Insert into CardDoHoa (TenCard, SoLuong, GiaBan, HinhAnh) 
   values (?, ?, ?, ?)`,[TenCard, SoLuong, GiaBan, HinhAnh],
   function(err, results){
      console.log("Results = ", results);
      if(err) res.status(500).json('Loi he thong')
      res.status(200).json('TC');
   }
   )
 }


 
 const HomeCards = (req, res) =>{
   connection.query(`Select * from CardDoHoa`, function(err, results){
      if(err) throw err;
      res.render('table.ejs', ({data: results}))
      // res.status(200).json(results)
   })
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
    getHome, POSTcreateUsers, CreateAccount, GetData, login, GetSP, addCard, ADDCARDS, HomeCards
 };