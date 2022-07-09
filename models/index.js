const mongoose=require('mongoose');
      // mongoose.connect('mongodb://localhost/rolex');
      mongoose.connect("mongodb+srv://akarshit123:akarshit000@cluster0.rk7u8.mongodb.net/mernusers?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
      }).then(()=>{
            console.log("connnection sucessfully");
      }).catch((err)=>console.log("no connection"));
      mongoose.Promise=Promise;
      mongoose.set('debug',true);
      
      module.exports.Products=require('./product');
      module.exports.Users=require('./user');
