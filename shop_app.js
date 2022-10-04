const popUpCloseButton = document.getElementById("close-popUp");
const overlay = document.querySelector(".overlay");
const popUp = document.getElementById("popUp");
const productInfo = document.querySelector(".product-info");

console.log(popUpCloseButton,overlay);



popUpCloseButton.addEventListener("click", closePopUp)
overlay.addEventListener("click",closePopUp)
function openPopUp(){
    popUp.classList.add("pop-up-active");
    overlay.classList.add("overlay-active")
}

function closePopUp(){
    popUp.classList.remove("pop-up-active");
    overlay.classList.remove("overlay-active")
}

function clearProductInfo(){
  productInfo.innerHTML = ``
}


function showContent(id){
  fetch('https://fakestoreapi.com/products/'+id)
  .then(clearProductInfo())
  .then(response => response.json())
  .then(data => {
   
    productInfo.innerHTML = `<img
    src="${data.image}"
    alt=""
  />
  <h1>${data.title}</h1>
  <div class="tag">
    <div class="category">${data.category}</div>
    <div class="price">${data.price}$</div>
    <div class="rating">Rating : ${data.rating.rate}</div>
    <div class="rated-users">Rated Users : ${data.rating.count}</div>
  </div>
  <p class="description">${data.description}</p>`
  })
  openPopUp()
 
}





fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => {
    const items = data;
    console.log(items);
    console.log(items[0].category);
    const container = document.getElementById("container");
    let temp = []
    if(items == null) return;
    for(var i = 0;i < items.length; i++){
        temp += ` <div class="item" >
        <img
          src="${items[i].image}"
          alt="" onclick="showContent(${items[i].id})"
        />
        <h1>
          ${items[i].title}
        </h1>
        <div id="rating-container">
          <span id="rating">Rating ${items[i].rating.rate}</span>
          <span id="rating-count">Rated Users ${items[i].rating.count}</span>
        </div>
      </div>`
    }
    container.innerHTML = temp;
    
})