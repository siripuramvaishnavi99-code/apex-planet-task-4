const products = [
{
id:1,
name:"iPhone 15",
category:"Electronics",
price:999,
image:"https://picsum.photos/id/1/300/200"
},
{
id:2,
name:"Samsung Galaxy S24",
category:"Electronics",
price:899,
image:"https://picsum.photos/id/2/300/200"
},
{
id:3,
name:"MacBook Air",
category:"Electronics",
price:1200,
image:"https://picsum.photos/id/3/300/200"
},
{
id:4,
name:"Dell XPS",
category:"Electronics",
price:1100,
image:"https://picsum.photos/id/4/300/200"
},
{
id:5,
name:"Sony Headphones",
category:"Electronics",
price:250,
image:"https://picsum.photos/id/5/300/200"
},
{
id:6,
name:"Men T-Shirt",
category:"Clothing",
price:25,
image:"https://picsum.photos/id/20/300/200"
},
{
id:7,
name:"Women Jacket",
category:"Clothing",
price:80,
image:"https://picsum.photos/id/21/300/200"
},
{
id:8,
name:"Blue Jeans",
category:"Clothing",
price:45,
image:"https://picsum.photos/id/22/300/200"
},
{
id:9,
name:"Sneakers",
category:"Clothing",
price:70,
image:"https://picsum.photos/id/23/300/200"
},
{
id:10,
name:"Hoodie",
category:"Clothing",
price:55,
image:"https://picsum.photos/id/24/300/200"
},
{
id:11,
name:"Coffee Maker",
category:"Home",
price:90,
image:"https://picsum.photos/id/30/300/200"
},
{
id:12,
name:"Air Fryer",
category:"Home",
price:130,
image:"https://picsum.photos/id/31/300/200"
},
{
id:13,
name:"Vacuum Cleaner",
category:"Home",
price:170,
image:"https://picsum.photos/id/32/300/200"
},
{
id:14,
name:"Desk Lamp",
category:"Home",
price:35,
image:"https://picsum.photos/id/33/300/200"
},
{
id:15,
name:"Cricket Bat",
category:"Sports",
price:95,
image:"https://picsum.photos/id/40/300/200"
},
{
id:16,
name:"Football",
category:"Sports",
price:30,
image:"https://picsum.photos/id/41/300/200"
},
{
id:17,
name:"Basketball",
category:"Sports",
price:28,
image:"https://picsum.photos/id/42/300/200"
},
{
id:18,
name:"Yoga Mat",
category:"Sports",
price:20,
image:"https://picsum.photos/id/43/300/200"
}
];

const productContainer = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");

function displayProducts(items){

productContainer.innerHTML = "";

items.forEach(product => {

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<img src="${product.image}" alt="${product.name}">
<div class="card-content">
<h3>${product.name}</h3>
<p class="category">${product.category}</p>
<p class="price">$${product.price}</p>
</div>
`;

productContainer.appendChild(card);

});

}

function filterAndSort(){

let filteredProducts = [...products];

if(categoryFilter.value !== "All"){
filteredProducts = filteredProducts.filter(
product => product.category === categoryFilter.value
);
}

if(sortPrice.value === "low-high"){
filteredProducts.sort((a,b)=>a.price-b.price);
}

if(sortPrice.value === "high-low"){
filteredProducts.sort((a,b)=>b.price-a.price);
}

displayProducts(filteredProducts);

}

categoryFilter.addEventListener("change", filterAndSort);
sortPrice.addEventListener("change", filterAndSort);

displayProducts(products);