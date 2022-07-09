const jwt=require('jsonwebtoken');
const verifyTokens=function(req,res,next){
    const token=req.params.token;
    jwt.verify(token,process.env.JWT_SECRET,function(err,decode){
        if(err){
            res.json({errMsg:"Token is invalid"})
        }else{
          req.userinfo=decode;
          next();
        }
    })
};

module.exports=verifyTokens;