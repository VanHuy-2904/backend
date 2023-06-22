const mongoose = require('mongoose')
const { types } = require('node-sass')

const data = new mongoose.Schema({

    username: {
        type: String,
    },

    Password: {
        types: String
    }
})
