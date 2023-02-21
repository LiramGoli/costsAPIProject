const mongoose=require("mongoose");
let autoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const userSchema= new Schema({
    id: {
        type: Number,
        uniqe: true
    },
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    birth_day:{
        type: String,
        required: true
    }
},{ timestamps:true })

userSchema.plugin(autoIncrement,{id: 'user_id_seq',inc_field: 'id'})
const User = mongoose.model('User',userSchema)
module.exports= User