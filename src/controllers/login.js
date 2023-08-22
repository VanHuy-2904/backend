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
    console.log(username)
    connection.query(
        'select * from Users where email = ? and matkhau = ?', [username, password],
        function(err, Results) {    
            if(err) {
            console.error('Loi dang nhap', err)
            res.status(500).json({success: false, message: 'Da xay ra loi'})
        }
     else {
        if(Results.length>0) {
            res.status(200).json({success: true, message: 'Dang nhap thanh cong'})
            connection.query('select Hoten from Users', function(err, ketqua){
               console.log({data:ketqua})
            })
        }
        else res.status(500).json({success: false, message: 'Sai tai khoan hoac mk'})

    }
}
        
        
           
         
         
     );
        
          
  }
 

 module.exports = {
    dangnhap
 }