const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        brand: { type: String,required: true},
        type:{type: String,required: true},
        size:{type: Number},
        img:{type: String,required: true},
        price:{type: Number,required: true},
        color:{type: String,required: true},
    },
    {
        timestamps:true,
        versionKey:false
    }
    )

    const product = mongoose.model('Product',productSchema)

    module.exports = product