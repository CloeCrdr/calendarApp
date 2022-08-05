//import { getAll } from "./renderer.js"
const app = document.getElementById("app")
const appMonth = document.getElementById("appMonth")
const appYear = document.getElementById("appYear")

let monthNavigation = 0 ;

function afficheCalendrier(d) {

    app.innerHTML= ''

    let premierJourDuMois = new Date(d)
    premierJourDuMois.setDate(1)
    let numPremierJourDuMois = premierJourDuMois.getDay()

    if (numPremierJourDuMois == 0) numPremierJourDuMois = 7

    let month = d.getMonth();
    let nombreDeJourMois = new Date(d.getFullYear(), month + 1, 0);
    let numNombreJourDuMois = nombreDeJourMois.getDate()
    let numDernierJourDuMois = nombreDeJourMois.getDay()

    if (numDernierJourDuMois == 0) numDernierJourDuMois = 7

    for (let i = 1; i < numPremierJourDuMois; i++) {
        ajouteCaseGrise()
    }
    for (let i = 1; i <= numNombreJourDuMois; i++) {
        ajouteCaseActive(i)
    }
    for (let i = numDernierJourDuMois; i < 7; i++) {
        ajouteCaseGrise()
    }

}
function ajouteCaseGrise() {
    let elem = document.createElement("div")
    elem.className = "caseInactive"
    app.appendChild(elem)
}
function ajouteCaseActive(num) {
    let elem = document.createElement("div")
    elem.className = "caseActive"
    elem.innerHTML = num
    app.appendChild(elem)
}

function afficheMonth(m) {
    let moisActuel = new Date(m)

    let numMoisActuel = moisActuel.getMonth()

    monthName = new Array ('Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre')

    appMonth.innerHTML = '' 
    let elem = document.createElement("span")
    elem.className = "month"
    elem.innerHTML = monthName[numMoisActuel]
    appMonth.appendChild(elem)    
}

function afficheYear(y) {
    let anActuel = new Date(y)

    const numAnActuel = anActuel.toLocaleDateString('fr-eu', {
        year: 'numeric'
    })
    appYear.innerHTML = '' 
    let elem = document.createElement("span")
    elem.className = "year"
    elem.innerHTML = numAnActuel
    appYear.appendChild(elem)    
}

let maDate = new Date()
let ceMois = maDate.getMonth() +1

afficheCalendrier(maDate)
afficheMonth(maDate)
afficheYear(maDate)

let back = document.getElementById("back")
let next = document.getElementById("next")


function initButtons (){
    next.addEventListener('click',()=> {
        maDate = new Date(maDate.getFullYear(),maDate.getMonth()+1,1)
        afficheCalendrier(maDate)
        afficheMonth(maDate)
        afficheYear(maDate)
    }) 

    back.addEventListener("click",()=> {
        maDate = new Date(maDate.getFullYear(),maDate.getMonth()-1,1)
        afficheCalendrier(maDate)
        afficheMonth(maDate)
        afficheYear(maDate)
    })
}
initButtons()


// initialization of dark and light modes 
document.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', darkMode);
  });
  
  function darkMode() {
    let body = document.querySelector('body');
    let mode = this.dataset.mode;
    body.dataset.theme = mode;
  }

  