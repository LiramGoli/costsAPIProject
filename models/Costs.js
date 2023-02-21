const mongoose = require("mongoose");
let autoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const costsSchema = new Schema({
    id: {
        type: Number,
        uniqe: true
    },
    user_id: {
        type: Number,
        required: true
    },
    year:
    {
        type: Number,
        required: true
    },
    month:
    {
        type: Number,
        required: true
    },
    day:
    {
        type: Number,
        required:true
    },
    description:
    {
        type: String,
        required: true
    },
    category:
    {
        type: String,
        enum: ['food', 'health', 'housing', 'sport', 'education', 'transportation', 'other'],
        required: true
    },
    sum:
    {
        type: Number,
        required: true
    }
},{ timestamps:true });


costsSchema.plugin(autoIncrement,{id: 'costs_id_seq',inc_field: 'id'});
const Costs = mongoose.model('Costs',costsSchema);
module.exports= Costs;