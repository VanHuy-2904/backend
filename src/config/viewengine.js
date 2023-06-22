const path = require('path');
const express = require('express');
var bodyparser = require('body-parser')


const configviewengine = (app)=>{
app.set('views', path.join('./src', './views')),
app.set('views engine', 'ejs')
app.use(express.static(path.join('./src', './public')));
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

}

module.exports= configviewengine;