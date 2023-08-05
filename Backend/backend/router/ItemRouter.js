const express=require("express");
const ItemService = require("../service/ItemService");
const ItemRouter = express.Router();

ItemRouter.get("/items",async function(req,res){
    console.log("Working");
    var items=await ItemService.showItems();
    res.json(items);
})

ItemRouter.post('/addItem',async function(req,res){
    var items=await ItemService.addItem(req.body);
    res.json(items);
})

ItemRouter.put('/updateItem/:id',async function(req,res){
    var {id}=req.params;
    var items=await ItemService.updateItem(id,req.body);
    console.log(items);
    res.json(items);
})

ItemRouter.delete('/deleteItem/:id',async function(req,res){
    var {id}=req.params;
    var items=await ItemService.deleteItem(id);
    res.json(items);
})

ItemRouter.get('/item/:value',async function(req,res){
    var {value}=req.params;
    console.log(value)
    var items=await ItemService.searchItem(value);
    console.log(items);
    res.json(items);
})

module.exports=ItemRouter;