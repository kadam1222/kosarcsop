let hely =[];
let termekekhelye = document.getElementById("hely");
function fetchDataPromise(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>render(json)) 
}


function render(adat){
    let formazotttermek = adat.map(elem =>`
        <div class="termek">
            <h2 class="title">${elem.title}</h2>
            <h3 class="price">${elem.price}$</h3>
            <p class="description">${elem.description}</p>
            <p class="category">${elem.category}</p>
            <img src="${elem.image}" class="image"></img>
            <p class="rating"> ${elem.rating.rate} ${elem.rating.count}</p>
            <button onclick="addcart(${hely})">Kosárhoz adás</button>
        </div>
        `).join("")
        hely+= formazotttermek
        
    termekekhelye.innerHTML=hely
    
}

let kosardiv = document.getElementById("kosar");
function addcart(elem){
    
    let tartalom = ""
    if(kosar.length===0){
        tartalom = 'A kosár üres'
        kosardiv.innerHTML =tartalom
    }
    else{
        elem.forEach(item =>{
            tartalom+=`<div class="kosar">
                            <p>${item.title}</p><br>
                            <p>${item.price}</p><br>
                            <button onclick>-</button>
                            <span>Mennyiség:</span>
                            <span id="${item.id}">1</span>
                            <button>+</button>
                        </div>`
            
        })
        kosardiv.innerHTML+=tartalom
    }
}

function hozzaad(){

}