const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/Library');
const dotenv =require('dotenv');
const Schema = mongoose.Schema;
dotenv.config();
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true});

const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;