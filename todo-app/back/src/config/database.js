const mongoose = require('mongoose')
const config = { useUnifiedTopology: true, useNewUrlParser: true }
mongoose.Promise = global.Promise // só pra garantir que o mongoose use o Premisse defaulto do node
module.exports = mongoose.connect('mongodb://localhost:27017/todo', config)