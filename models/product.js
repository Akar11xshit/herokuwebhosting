
const mongoose=require('mongoose'),
      product=new mongoose.Schema({
      img:{
              type:String,
              required:true
      },
      price:{
        type:Number,
        required:true
      },
      des:{
        type:String,
        required:true
      },

      qtyInStock:{
        type:Number,
        required:true
      },
      rating:{
        type:String,
        required:true

      },
      reviews:{
        type:Number,
        required:true
      },

      name:{
        type:String,
        required:true
      },

      calibre:{
        type:String,
        required:true
      }
      });


      const Products=mongoose.model("Products",product);
      module.exports=Products;