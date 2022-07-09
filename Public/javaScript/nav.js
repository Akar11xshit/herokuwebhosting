class NavBar {
    createNavBar (imgUrl,brandName,userinfo,length){
        return`<div class="nav" >
        <div class="nav1">
            <a href="/">
            <img src=${imgUrl} />
            </a>
            <a href="/">
            <p>${brandName}</p>
            </a>
        </div>
        <div class="right-nav">
            ${
                length==0?`<a href="/cart">Cart</a>`:
                `<a href="/cart">cart
                    <span class="banner">${length}</span>
                 </a>` 
            }
           ${
            userinfo?`   
            <div class="dropdown">
               <button class="dropbtn">${userinfo.name}</button>
               <div class="dropdown-style">
                 <a href="#" >Profile</a>
                 <a href="#" >Orders</a>
                 <a href="#" onclick="logout()">Logout</a>
               </div>
            </div>
            `:
            ` <a href="/signIn">SignIn</a>`
            }
        </div>
   </div>`;
    }
}

const user=localStorage.getItem("userinfo")?
JSON.parse(localStorage.getItem("userinfo"))
:null;


const cartItems=localStorage.getItem("cartItem")?
JSON.parse(localStorage.getItem("cartItem"))
:[];
const navBar=new NavBar();
const imgUrl="/images/rolexji.jpg";
const brandName="Rolex";
const navHolder=document.createElement('div');
      navHolder.innerHTML=navBar.createNavBar(imgUrl,brandName,user,cartItems.length);
      document.body.appendChild(navHolder);

      function logout(){
        localStorage.clear();
        location.href='/signIn';
     }