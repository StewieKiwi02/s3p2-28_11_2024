function newH1() {

    const titolo = document.getElementById('titolo')

    if(titolo.textContent === titoloBase){

        titolo.textContent = newTitolo
    }else {

        titolo.textContent = titoloBase
    }

} 

let titoloBase = 'STORARIUM';
let newTitolo = 'BENVENUTI IN STORARIUM';


function newBackground(){

    const sfondo = document.querySelector('body')

    if(sfondo.style.background === sfondoAlternativo){

        sfondo.style.background = sfondoIniziale
    }else {

        sfondo.style.background = sfondoAlternativo
    }
}


let sfondoIniziale = 'bisque';
let sfondoAlternativo = 'orange';



function newAddress(){

    const indirizzo = document.querySelector('#address')

    if (indirizzo.textContent.trim() === addressVecchio){

        indirizzo.innerHTML = addressNuovo.replace(/,/g, ',<br>')
    }else {

        indirizzo.innerHTML = addressVecchio.replace(/,/g, ',<br>')
    }
}


let addressVecchio = 'storarium.com, P.IVA 0482948207, Vigodarzere (IT), Italia'
let addressNuovo = 'storarium.com, P.IVA 0485611684, Berlino (DE), Germania'
 
 

function newClassLink(){

    const linkAmazon = document.querySelectorAll('table a [href="https://terrarium-amazon.com"]')

    linkAmazon.forEach(function(link){

        link.className += 'amazon-link'
    })
}

window.onload = newClassLink;


function visibleInvisibleImg(){

    const image = document.querySelectorAll('table img')

    for (let i = 0; i < image.length; i++){

        const img = image[i]

        if (img.style.display === 'none'){

            img.style.display = 'block'
        }else {

            img.style.display = 'none'
        }

    }

}

function cambioColore(){

    const price = document.querySelectorAll('table p.prezzo')

    for (let i = 0; i < price.length; i++){

        const prezzo = price[i]
        
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

        prezzo.style.color = randomColor
    }


}


