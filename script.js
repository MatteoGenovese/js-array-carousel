const images = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
];

let carousel = document.querySelector(`.carousel`)

for (let index = 0; index < images.length; index++) {
    let element=`<img src="${images[index]}" class="w-100 visually-hidden">`;
    carousel.innerHTML+=element;
}
index=0
carousel.children[index].classList.remove("visually-hidden");
carousel.children[index].classList.add("d-block");

previousBtn=document.getElementById("previous-btn");
followingBtn=document.getElementById("following-btn");


let thumbaMail = document.querySelector(`.thumbmail div.row`)
for (let index = 0; index < images.length; index++) {
    let element=`<div class="col"><img src="${images[index]}" class="w-100" style="height: 100%;"> </div>`;
    thumbaMail.innerHTML+=element;
}

let thumbMailImage



thumbMailImage = document.querySelector(`.thumbmail div.row div.col:nth-child(${index+1}) img`)
thumbMailImage.classList.add("active-thumbmail");


followingBtn.addEventListener(`click`,
function(){
    carousel.children[index].classList.add("visually-hidden");
    carousel.children[index].classList.remove("d-block");  

    thumbMailImage = document.querySelector(`.thumbmail div.row div.col:nth-child(${index+1}) img`)
    thumbMailImage.classList.remove("active-thumbmail");


    // thumbMailImage.children[index].classList.remove("active");

    index+=1;
    if(index==images.length)
    {
        index=0;
    }
    carousel.children[index].classList.remove("visually-hidden");
    carousel.children[index].classList.add("d-block");  

    thumbMailImage = document.querySelector(`.thumbmail div.row div.col:nth-child(${index+1}) img`)
    thumbMailImage.classList.add("active-thumbmail");



    
}
);

previousBtn.addEventListener(`click`,
function(){
    carousel.children[index].classList.add("visually-hidden");
    carousel.children[index].classList.remove("d-block");  

    thumbMailImage = document.querySelector(`.thumbmail div.row div.col:nth-child(${index+1}) img`)
    thumbMailImage.classList.remove("active-thumbmail");

    index-=1;
    if(index==-1)
    {
        index=images.length-1;
    }
    carousel.children[index].classList.remove("visually-hidden");
    carousel.children[index].classList.add("d-block");  

    thumbMailImage = document.querySelector(`.thumbmail div.row div.col:nth-child(${index+1}) img`)
    thumbMailImage.classList.add("active-thumbmail");
}
);