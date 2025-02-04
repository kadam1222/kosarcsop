
let hely = [];
let jsonok=[];

let termekekhelye = document.getElementById("hely");
let kosardiv = document.getElementById("kosar");

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
            <p class="rating"> ${elem.rating.rate}⭐ ${elem.rating.count}📝</p>
            <button onclick="peldany.addcart(${elem.id})">Kosárhoz adás</button>
        </div>
        `).join("")
        
        hely = formazotttermek

        
    termekekhelye.innerHTML=hely
    
}


class Tarolo{
    constructor(){
        this.items = []
    }
    
    addcart(productID){
      fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(adat => {
    const termek = adat.find(p => p.id === productID);
    if(termek){
        const benne = this.items.some(item => item.id ===productID)
        if(!benne){
          this.items.push(termek)
          console.log(this.items)
          kosardiv.push=peldany.items
          this.rendercart();
        }
      }
    
    })
    }

    rendercart(){
        
        kosardiv.innerHTML = this.items.map(item => `
            <div class="termek" id="${item.id}"}">
                <h2>${item.title}</h2>
                <h3>${item.price}$</h3>
                <button onclick="elvesz(mennyiseg${item.id})">-</button>
                <span>Mennyiség: </span>
                <span id="mennyiseg${item.id}">1</span>
                <button onclick="hozzaad(mennyiseg${item.id})">+</button>
                <button onclick="peldany.töröl(${item.id})">Törlés</button>
            </div>
        `).join("");
    }
    clear(){
      this.items=[]
      this.rendercart()
    }
    töröl(productID){
      this.items = this.items.filter(item => item.id !== productID);
      this.rendercart();
    }
    
}
const peldany = new Tarolo();

function hozzaad(id){
  
  let szamElem = document.getElementById(id.id);
  console.log(id)
  let szam = parseInt(szamElem.innerHTML); 
  szam++; 
  szamElem.innerHTML = szam; 
  console.log(szam); 
}
function elvesz(id){
  
  let szamElem = document.getElementById(id.id);
  let szam = parseInt(szamElem.innerHTML); 
  if(szam > 1){
    szam--;  
  }
  szamElem.innerHTML = szam; 
  console.log(szam); 
}


