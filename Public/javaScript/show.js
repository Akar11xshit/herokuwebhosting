
const origin=document.location.origin;
const id=document.location.search.split("=")[1];
const url=`${origin}/api/product/${id}`

let qty=1;
function selectQty(e){
qty=e.value;
}
function addToCart(){
fetch(url)
.then(function(response){
let promiseOfDb=response.json();// gives  the promise of db
if(response.ok){
promiseOfDb.then(function(data){
const cartItemInOlderCartArray=localStorage.getItem("cartItem")?JSON.parse(localStorage.getItem("cartItem")):[];

const adds=cartItemInOlderCartArray.filter(function(item){
    if(item._id!=data._id){
        return item
  }
})
localStorage.setItem("cartItem",JSON.stringify([...adds,{...data,selectedQty:qty}]));
location.href="/cart";
})
}else{
const msgBox=document.querySelector("#msgBox");
promiseOfDb.then(function(err){
msgBox.innerText=err.errMsg;
})
}
})
}
