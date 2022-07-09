const shippinginfo= JSON.parse(localStorage.getItem("shippinginfo"));
const {address,city,contact,country,name:userName,postalcode}=shippinginfo;

const Shipping=document.querySelector(".shipping");
Shipping.innerHTML=`<h2 id="shippings">Shipping Details</h2>
<div class="name">
<p id="address">${userName},${address},${city},${country},${postalcode},${contact}</p>
</div>`;

const OrderItem=({name,img,selectedQty,price})=>`  <div class="product-item">
<img 
 src=${img}
 width="90px"
 height="90px"
/>
<p id="nameStyle">${name}</p>
<p id="price">${selectedQty} X ${price} =&nbsp;&#8377;${selectedQty * price}</p>
</div>
`;

const OrderItems=JSON.parse(localStorage.getItem("cartItem"));
const OrderItemsBox=document.querySelector(".OrderItemsBox");

OrderItems.forEach((item)=>{
    const orderItemHolder=document.createElement('div');
    orderItemHolder.className="OrderItemStyle";
    orderItemHolder.innerHTML=OrderItem(item);
    const OrderItemsBox=document.querySelector(".OrderItemsBox");
    OrderItemsBox.appendChild(orderItemHolder);  
})


