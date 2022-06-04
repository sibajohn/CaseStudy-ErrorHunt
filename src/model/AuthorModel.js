const mongoose = require('mongoose');
// mongoose.connect('process.env.MONGODB_URI||mongodb://localhost:27017/Library');
const dotenv =require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true});

// mongoose.connect('process.env.MONGODB_URI||mongodb://localhost:27017/Library');
const Schema = mongoose.Schema;
// dotenv.config();

const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;