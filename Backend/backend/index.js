const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose=require("mongoose")
const express = require("express");
const ItemRouter=require("./router/ItemRouter")
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(ItemRouter);
mongoose.connect('mongodb://127.0.0.1:27017/techHive')

app.listen(8081,()=>{
    console.log("Server started!!!")
});