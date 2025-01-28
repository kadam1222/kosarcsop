let hely =document.getElementById("hely");
function fetchDataPromise(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>render(json)) 
}
const termekek =[]

function render(adat){
    let formazotttermek = adat.map(elem =>`
        <div class="termek">
            <h2 class="title">${elem.title}</h2>
            <h3 class="price">${elem.price}$</h3>
            <p class="description">${elem.description}</p>
            <p class="category">${elem.category}</p>
            <img src="${elem.image}" class="image"></img>
            <p class="rating"> ${elem.rating.rate} ${elem.rating.count}</p>
        </div>
        `)
    hely.innerHTML= formazotttermek
}

