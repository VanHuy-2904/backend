 const { create } = require('handlebars');
const connection = require('../config/database');
const { json } = require('express');
 const getHome = (req, res)=>{
   
    return res.render('home.ejs')
 }
 
 const POSTcreateUsers = (req, res) => {
   let hoten = req.body.hoten;
   let email = req.body.email;
   let matkhau = req.body.matkhau;
   console.log('req body: ', 'hoten: ', hoten, 'email: ', email, 'matkhau: ', matkhau)
   connection.query(
      'insert into Users (Hoten, email, matkhau) values (?, ?, ?)', [hoten, email, matkhau],
      function(err, results) {
        console.log("Results = ", results); // results contains rows returned by server
        // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
         res.send('TC')

      }
    );
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

 

 const CreateAccount = (req, res) => {
   res.render('create.ejs')
 }

 const login = (req, res) =>{
   res.render('login.ejs')
 }




 module.exports = {
    getHome, POSTcreateUsers, CreateAccount, GetData, login
 };