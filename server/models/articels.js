const mongoose = require('mongoose');
const Schema = mongoose.Schema


const articelsSchema = new Schema ({
  title : String,
  content : String,
  category : String,
  author : String
})

let Articels = mongoose.model('Articels', articelsSchema);

module.exports = Articels;