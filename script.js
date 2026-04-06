const menu = [
{name:"Margherita",price:35},
{name:"Cotto e Funghi",price:42},
{name:"Diavola",price:40},
{name:"Salami Dolce",price:40},
{name:"Quattro Formaggi",price:44},
{name:"Quattro Stagioni",price:45},
{name:"Carnivora",price:48},
{name:"Mario",price:42},
{name:"Panceta",price:42},
{name:"Tono e Cipola",price:42},
{name:"Crudo e Rucola",price:45},
{name:"Porchetta",price:45},
{name:"Bufala",price:38},
{name:"Vegetariana",price:37},

{name:"Smash Burger",price:35},
{name:"Smash Double Burger",price:45},
{name:"Chicken Burger",price:35},

{name:"Combo Smash Burger",price:53},
{name:"Combo Smash Double Burger",price:63},
{name:"Combo Chicken Burger",price:53},

{name:"Panini Spianata Picante",price:15},
{name:"Panini Spianata Dolce",price:15},
{name:"Panini Prosciutto Cotto",price:15},
{name:"Panini Mortadela",price:16},
{name:"Panini Prosciutto Crudo",price:15},

{name:"Fries",price:10},
{name:"Cheesy Fries",price:15},

{name:"Clatite Dulceata",price:20},
{name:"Clatite Nutella",price:23},
{name:"Clatite Nutella Fructe",price:35},
{name:"Pizza Nutella",price:32}
];

let cart=[];

function render(){
let html="";
menu.forEach((p,i)=>{
html+=`<div class="item">
<b>${p.name}</b> - ${p.price} RON 
<button onclick="add(${i})">Adaugă</button>
</div>`;
});
document.getElementById("menu").innerHTML=html;
}

function add(i){
cart.push(menu[i]);
showCart();
}

function showCart(){
let html="";
let total=0;
cart.forEach(p=>{
html+=p.name+"<br>";
total+=p.price;
});
html+="<br>Total: "+total+" RON";
document.getElementById("cart").innerHTML=html;
}

function sendWhatsApp(){
let text="Comanda:%0A";
cart.forEach(p=> text+=p.name+"%0A");
let total=cart.reduce((a,b)=>a+b.price,0);
text+="Total:"+total+" RON";
window.open("https://wa.me/40728710294?text="+text);
}

render();
