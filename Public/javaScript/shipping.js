const shippinginfo={
    name:'',
    address:'',
    city:"",
    contact:"",
    postalCode:"",
    country:""
}
let phoneElement=document.querySelector('#phone');
function validate(e){
  let name=e.name;
  let value=e.value;
  if(name=="name"){
    shippinginfo.name=value;
  }
  if(name=="address"){
     shippinginfo.address=value;
  }
  if(name=="city"){
    shippinginfo.city=value;
  }
  if(name=="contact"){
    let phone=value;
     if(phone.length!=10){
        phoneElement.innerHTML=`<p style="color:red">phone number is invalid &#128529</p>`
     }else{
        phoneElement.innerHTML=`<p style="color:green">phone number is valid &#128077</p>`
     }
     shippinginfo.contact=value;
  }
  if(name=="postalcode"){
    shippinginfo.postalcode=value;
  }
  if(name=="country"){
     shippinginfo.country=value;
  }
}

function handlesubmit(){
      localStorage.setItem("shippinginfo",JSON.stringify(shippinginfo));
      let userinfo=JSON.parse( localStorage.getItem("userinfo"));
      location.href=`/orderScreen/${userinfo.token}`;
      return false
}