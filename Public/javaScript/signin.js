
const userinfoo={
    email:'',
    password:''
}

function validate(e){
    console.log(e.name)
  let name=e.name;
  let value=e.value;
  if(name=="email"){
      userinfoo.email=value;
  }
  if(name=="password"){
      userinfoo.password=value;
  }
}
const redirect=location.search.split("=")[1];
function handlesubmit(){console.log(userinfoo)
    
    const msgBox=document.querySelector(".msg");
    const url=`${location.origin}/signIn`;
    const requestHeader={
        method:"POST",
        headers:new Headers({
            'Content-Type':'application/json'
        }),
        body:JSON.stringify({
           email:userinfoo.email,
           password:userinfoo.password
        })
    };
    fetch(url,requestHeader)
    .then(function(res){
         const promise=res.json();
                 if(res.ok){
                       promise.then(function(datas){
                          localStorage.setItem("userinfo",JSON.stringify(datas));
                          if(redirect=="shipping"){
                              location.href=`/shipping/${datas.token}`;
                          }else{
                              location.href="/product";
                          }
                       })
                 }else{
                     promise.then(function(err){
                         msgBox.innerHTML=err.errMsg;
                     })
                 }
    })
return false


}
const linkToSignup=document.querySelector('#linkToSignup');
      if(redirect=="shipping"){
         linkToSignup.innerHTML=`<p style="margin-bottom: 40px;" class="label">If you have new Customer ?</p>
         <button class="button1"><a href="/signUp/?redirect=shipping">Create a new account</a></button>`;
      }else{
         linkToSignup.innerHTML=`<p style="margin-bottom: 40px;"class="label">If you have new Customer ?</p>
         <button class="button1"><a href="/signUp">Create a new account</a></button>`;
      }




