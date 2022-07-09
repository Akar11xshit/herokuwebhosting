    let totalAmount=0;
    const itemInCart=localStorage.getItem("cartItem")?
    JSON.parse(localStorage.getItem("cartItem"))
    :[];

    function createcartItem(item){
        return `<a href="#"> <img width="80px" height="80px" src=${item.img}> </a>
            <a href="#" id="rolex"> Rolex watch </a>
            <span id="price"> &#8377 ${item.price} * ${item.selectedQty}</span>
            <button id=${item._id} onclick="deleteItem(this)">Delete</button>`;
    }
     
     itemInCart.forEach(function(item){
           const cartItemHolder=document.createElement('div');
           cartItemHolder.className="cartItem";
           cartItemHolder.innerHTML=createcartItem(item);
           const col2=document.querySelector(".col2");
           col2.appendChild(cartItemHolder);  
     });

     function deleteItem(e){
        const filterCartItem=itemInCart.filter(function(item){
            if(item._id!=e.id){
                return item;
            }
        })
        localStorage.setItem("cartItem",JSON.stringify(filterCartItem));// updating localstorage
        location.reload();// reloading the page 
    }
    if(itemInCart.length==0){
           const msgBox=document.querySelector('.msgBox');
           msgBox.innerHTML=`
           <div class="msgStyle">
           <p class="empty">
            Your cart is empty 
            <a href="/product" class="shopping">Go shopping 
            </a>
          </p>
          </div>`;
    }
   if(itemInCart.length!=0){
    itemInCart.forEach(function(item){
       totalAmount=totalAmount+(Number(item.selectedQty)*item.price);
   })
   const userr=localStorage.getItem("userinfo")?
   JSON.parse(localStorage.getItem("userinfo"))
   :null;
   
const action=document. querySelector('.action');
     action.innerHTML=
     ` 
     <div class="actionStyle">
     <p>${itemInCart.length} items &#8377; ${totalAmount}</p>
     ${userr?`
                <a href="/shipping/${userr.token}">
                    <button> Proceed To Checkout </button>
                </a> 
                `
                :
                `<a href="/signIn?redirect=shipping">
                    <button> Proceed To Checkout </button>
                </a> `
            }
           
     </div>
    `}   