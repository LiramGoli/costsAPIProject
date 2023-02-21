const express = require("express");
const mongoose=require("mongoose");
const bodyParser = require('body-parser');
const userRoutes= require('./routes/userRoutes');
const developerRouter = require('./routes/developerRoutes');
const costRouter = require('./routes/costRouter')

const app=express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
const dbURI="mongodb+srv://liram:liram@cluster0.3eiygld.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI,{dbName: 'Project'})
    .then((result)=>app.listen(3000))
    .catch((err)=>resizeBy.send({error: err.message}));

//users
app.use('/users',userRoutes);
app.use('/developers',developerRouter);
app.use('/costs',costRouter)

