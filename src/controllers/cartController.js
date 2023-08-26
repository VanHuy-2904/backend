const connection = require("../config/database");
const { connect } = require("../config/database");

const InsertCart = (req, res) => {
    let Idpro = req.query.Idpro;
    let IdUser = req.query.IdUser;
    let title = req.query.title;
    let price = req.query.price
    if(Idpro && IdUser) {
       connection.query(
          'Select * from Cart where id = ? and idUser = ?',[Idpro], [IdUser],
          function(err, results){
             if(results.length>0) {
                connection.query( 'Update cart set quantity = quantity + 1 and thanhtien = price * quantity where id = ? and idUser = ?'[Idpro],[IdUser],
                function(err, ketqua){
                    if(err) throw err;
                    else {                         res.status(202).json('Cap nhat thanh cong')
                }
                })
             }
             else {
                connection.query(
                   'Insert into cart (id, idUser, title, quantity, price, thanhtien) values (?, ?, ?, ?, ?) ', [Idpro, IdUser, '1', price * quantity],
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
 }
         
 module.exports = {
    InsertCart
 }