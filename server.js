const ex=require('express'),
      port=process.env.PORT || 7551,
      db=require('./models/index'),
      verifyTokens=require('./utils'),
      bcrypt=require('bcrypt'),
      app=ex();
      dotenv=require('dotenv'),
      dotenv.config()
      const products=require('./data/dummydata.js')
      jwt=require("jsonwebtoken");
      app.use(ex.static("Public"));
      app.use(ex.json());
      app.get('/',(req,res)=>{
          res.render('index.ejs');      
        })
        
        app.get('/popup',(req,res)=>{
          res.render('popup.ejs');      
        })

        app.get('/product/:id',(req,res)=>{
          db.Products.findById(req.params.id)
          .then(function(selectedProduct){
             res.render("show.ejs",{sp:selectedProduct})
          }).catch(function(err){
                   res.status(401).json({
                       msg:"product does not found"
                   })
          })
        })


        app.get('/product',(req,res)=>{
          db.Products.find()
          .then(function(products){
             res.render('product.ejs',{allProducts:products}); 
             })  
             .catch(function(err){
              res.json(err);
          })  
        })

        app.get('/additems',function(req,res){
          db.Products.insertMany(products)
          .then(function(products){
              res.json(products)
          }).catch(function(err){
              res.json({msg:err})
          })
      })

      app.get('/remove',function(req,res){
        db.Products.remove({})
        .then(function(products){
          res.json(products)
        })
        .catch(function(err){
          res.json({msg:err})
      })
      })
      
        app.get('/signIn',(req,res)=>{
          res.render('signIn.ejs');      
        })

        app.get('/footer',(req,res)=>{
          res.render('footer.ejs');      
        })

        app.post('/signIn',function(req,res){
          db.Users.findOne({email:req.body.email})
          .then(function(userinfo){
            console.log(userinfo)
              if(userinfo){
                 if(bcrypt.compareSync(req.body.password,userinfo.password)){
                       res.json({
                           name:userinfo.name,
                           email:userinfo.email,
                           isAdmin:userinfo.isAdmin,
                           _id:userinfo._id,
                           token:jwt.sign({
                            name:userinfo.name,
                            email:userinfo.email,
                            isAdmin:userinfo.isAdmin,
                             _id:userinfo._id
                           },process.env.JWT_SECRET)
                       })
                 }else{
                  res.status(402).json({errMsg:'email or password is invalid'})
                 }
              }else{
                  res.status(403).json({errMsg:'email or password is invalid 403'})
              }
          })
      })
     

        app.get('/signUp',(req,res)=>{
          res.render('signUp.ejs');      
        })

        app.post('/signUp',function(req,res){
          const hashPassword=bcrypt.hashSync(req.body.password,14);
          db.Users.create({
              name:req.body.name,             
              email:req.body.email,
              password:hashPassword,
              isAdmin:false
          }).then(function(info){
              res.json({
                  name:info.name,
                  email:info.email,
                  isAdmin:info.isAdmin,
                  _id:info._id,
                  token:jwt.sign({
                    name:info.name,
                    email:info.email,
                    isAdmin:info.isAdmin,
                     _id:info._id
                   },process.env.JWT_SECRET)
              })
          })
          .catch(function(err){
              res.status(405).json({
                  errMsg:"given email already found !"
              })
          })
      })

        app.get('/cart',(req,res)=>{
          res.render('cart.ejs');      
        })

        app.get('/shipping/:token',verifyTokens,function(req,res){
          res.render('shipping.ejs');
      })
      app.get('/orderScreen/:token',verifyTokens,(req,res)=>res.render('orderScreen.ejs'));
       
        app.get('/api/product/:pid',function(req,res){
          db.Products.findById(req.params.pid)
          .then(function(selectedProduct){
             res.json(selectedProduct)
          }).catch(function(err){
                   res.status(404).json({
                       msg:"product does not found"
                   })
          })
      })

  
        app.listen(port,()=>{
        console.log(`server is runing at  ${port}`);
        });