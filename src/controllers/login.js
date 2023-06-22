const { create } = require('handlebars');
const { json } = require('express');  
const bcrypt = require('bcrypt');
const bodyparser = require('body-parser')
const connection = require('../config/database')
const dotenv = require('dotenv')
// const mongoose = require('mongoose')

// dotenv.config()
// mongoose.connect(process.env.moongodb_url, ()=>{
//     console.log('connect to mongoose')
// })

const dangnhap= (req, res) => {
    let username = req.body.taikhoan;
    let password = req.body.pass;

    connection.query(
        'select * from Users where email = ? and matkhau = ?', [username, password],
        function(err, results) {
           
           console.log("Results = ", results); // results contains rows returned by server
           // console.log("Fields = ",fields); // fields contains extra meta data about results, if available
           if(results) res.send('TC')
         }
     );
            //  const username = req.body.taikhoan; 
            //  console.log(username)
            //  if(username !== email) {
            //     res.send('TB')
            //  }
 
            //  const validPassword = bcrypt.compare(
            //      req.body.pass,
            //      connection.Users.matkhau
            //  )
            //  if(!validPassword) {return res.status(401).send('Wrong Pass'), alert('Sai thogn tin')}
            //  if(username && validPassword) {return res.status(200).send('dang nhap thanh cong'), alert('TC')}
              
  
  }
 // }

 module.exports = {
    dangnhap
 }