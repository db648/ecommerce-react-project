const mongoose = require("mongoose");

const kidsSchema = new mongoose.Schema({
    product_name : { type: String, required: true },
    product_price : { type: Number, required: true },
    product_color : { type: String, required: true },
    product_size : { type: String, required: true },
    product_brand : { type: String, required: true },
    product_type : { type: String, required: true },
    category : { type: String, required: true },
    material_type : { type: String, required: true },
    wash : { type: String, required: true },
    image : { type: String, required: true },
},
{
    timestamps: true 
})

module.exports = mongoose.model("kids", kidsSchema)