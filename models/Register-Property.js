const mongoose = require('mongoose');
const registerPropertySchema = new mongoose.Schema(
    {
        title:{
            type:String
        },

        
        area:{
            type:String,
            required:[true, "This field is required"]
        },
        address:{
            type:String,
            required:[true, "This field is required"]
        },
        pinCode:{
            type:Number,
            required:[true, "This field is required"]
        },
        state:{
            type:String,
            required:[true, "This field is required"]
        },
        city:{
            type:String,
            required:[true, "This field is required"]
        },
        propertyType:{
            type:String,
            required:[true, "This field is required"]
        },
        image:{
            type:String,
            required:[true, "This field is required"]
        },
        village:{
            type:String,
            required:[true, "This field is required"]
        },
        purchaseDate:{
            type:String,
            required:[true, "This field is required"]
        },
        propertySize:{
            type:String,
            required:[true, "This field is required"]
        },
        unit:{
            type:String,
            required:[true, "This field is required"]
        }
    }
)

module.exports = mongoose.model("Register-Property",registerPropertySchema )