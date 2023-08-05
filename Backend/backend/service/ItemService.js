const mongoose=require("mongoose")
const ItemModel=require("../model/ItemModel")
mongoose.connect('mongodb://127.0.0.1:27017/techHive')

const ItemService={
    showItems:async()=>{
        var items=await ItemModel.find();
        console.log(items);
        return items;
    },
    addItem:async(item)=>{
        await ItemModel.create(item);
        var items=await ItemModel.find();
        return items;
    },
    updateItem:async(id,item)=>{
        await ItemModel.findOneAndUpdate({id:id},{
            model:item.model,
            brand:item.brand,
            category:item.category,
            cost:item.cost,
        })
        return await ItemModel.findOne({id:id});
    },
    deleteItem:async(id)=>{
        await ItemModel.findOneAndDelete({id:id});
        return await ItemModel.find();
    },
    searchItem:async(value)=>{
        var items=await ItemModel.find({ 
            $or: [
                { model: value }, 
                { brand: value }, 
                { category: value },
                { cost: value }
            ] 
        })
        return items;
    }
}

module.exports=ItemService;