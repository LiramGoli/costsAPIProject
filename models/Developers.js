const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const developerSchema= new Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    }
},{ timestamps:true });

const Developer = mongoose.model('Developer', developerSchema);
module.exports = Developer; 

