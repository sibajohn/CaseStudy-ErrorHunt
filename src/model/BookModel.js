const mongoose = require('mongoose');
// mongoose.connect('process.env.MONGODB_URI||mongodb://localhost:27017/Library');
const dotenv =require('dotenv');
dotenv.config();
//mongoose.connect('process.env.MONGODB_URI||mongodb://localhost:27017/Library');
 mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true});

const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;