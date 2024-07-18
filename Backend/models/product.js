const mongoose =require('mongoose')
const productSchema=new mongoose.Schema({
   name:{
    type: String,
    required:[true,'please enter product name'],
    trim: true,
    maxLength: [100, 'Product name cannot exceed 100 character']
   },
   price:{
    type: Number,
    required:[true,'please enter product price'],
    maxLength: [5, 'Product name cannot exceed 5 character'],
    default:0.0
   },
   description:{
    type: String,
    required:[true,'please enter product description'],
    
   },
   _id:{
    type:String,
    required:true
   },
   rating:{
    type: Number,
    default:0
   },
   images: [{
    _id:{
        type:String,
        required:true
       },
    url:{
        type:String,
        required:true
    },
   }],
   category:{
    type:String,
    required:[true,'please select category for this product'],
    enum:{
        values:['Electronics','Cameras','Laptops','Accessories','HeadPhones','Food','Books','Clothes/Shoes','Beauty','sports','outdoor','Home','Furniture','Toys & Games','Health & Wellness','Fashion'],
        message: 'please select correct category for product'
    }
},
    seller:{
        type:String,
        required:[true, 'please enter product seller']
    },
    stock:{
        type:Number,
        required:[true, 'please enter product stock'],
        maxLength:[500,'product name cannot exceed 5 character'],
        default:0
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[{
        user:{
            type:mongoose.Schema.ObjectId,
            ref:'User',
            required:true
        },
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }
    ],
  

    createAt:{
        type: Date,
        default: Date.now
}
   
})
module.exports=mongoose.model('Product', productSchema);