//importo le immagini in un array
const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
];


//seleziono il carosello, lo popolo delle immagini nascondendole inizialmente, 
//infine per la prima immagine rimuovo la classe per nasconderla e ne metto un altra display block

let carousel = document.querySelector(`.carousel`)

for (let index = 0; index < images.length; index++) {
    let element=`<img src="${images[index]}" class="w-100 visually-hidden">`;
    carousel.innerHTML+=element;
}
index=0
carousel.children[index].classList.remove("visually-hidden");
carousel.children[index].classList.add("d-block");



//inserisco le immagini della thumbmail
let thumbaNail = document.querySelector(`.thumbnail div.row`)
for (let index = 0; index < images.length; index++) {
    let element=`<div class="col"><img src="${images[index]}" class="w-100" style="height: 100%;"> </div>`;
    thumbaNail.innerHTML+=element;
}

let thumbNailImage


//
thumbNailImage = document.querySelector(`.thumbnail div.row div.col:nth-child(${index+1}) img`)
thumbNailImage.classList.add("active-thumbnail");


//assegno il codice html dei bottoni a delle varibili per assegnare delle funzionalità

previousBtn=document.getElementById("previous-btn");
followingBtn=document.getElementById("following-btn");

followingBtn.addEventListener(`click`,
function(){
    carousel.children[index].classList.add("visually-hidden");
    carousel.children[index].classList.remove("d-block");  

    thumbNailImage = document.querySelector(`.thumbnail div.row div.col:nth-child(${index+1}) img`)
    thumbNailImage.classList.remove("active-thumbnail");


    // thumbNailImage.children[index].classList.remove("active");

    index+=1;
    if(index==images.length)
    {
        index=0;
    }
    carousel.children[index].classList.remove("visually-hidden");
    carousel.children[index].classList.add("d-block");  


    // con i css selector seleziono l'immagine per dargli il bordo di immagine attiva
    //questo dopo aver utilizzato una nuova row e le col per la dinamicità di inserimento di una nuova immagine
    //nel carosello

    thumbNailImage = document.querySelector(`.thumbnail div.row div.col:nth-child(${index+1}) img`)
    thumbNailImage.classList.add("active-thumbnail");



    
}
);

previousBtn.addEventListener(`click`,
function(){
    carousel.children[index].classList.add("visually-hidden");
    carousel.children[index].classList.remove("d-block");  

    thumbNailImage = document.querySelector(`.thumbnail div.row div.col:nth-child(${index+1}) img`)
    thumbNailImage.classList.remove("active-thumbnail");

    index-=1;
    if(index==-1)
    {
        index=images.length-1;
    }
    carousel.children[index].classList.remove("visually-hidden");
    carousel.children[index].classList.add("d-block");  

    thumbNailImage = document.querySelector(`.thumbnail div.row div.col:nth-child(${index+1}) img`)
    thumbNailImage.classList.add("active-thumbnail");
}
);