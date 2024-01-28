const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    //author:ObjectId,
    coverImage: String,
    id: Number,
    name: {type:String,required:true,max:[60,'最大６０文字まででーす']},
    stock: Number, // または String に修正するか、必要に応じて変更してください
    price: Number,
    description: String,
    Heading: {
        title: [String],
        value: [String]
    }
});

module.exports = mongoose.model('Product',ProductSchema)