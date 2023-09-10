document.addEventListener("DOMContentLoaded", function(){
let search = document.getElementById("inputSearch");

let submit = document.getElementById("btnBuscar");
let container = document.getElementById("card");

let item = [];


      




//Llamado de la API anime 
submit.addEventListener("click", function(){
    let text = search.value;
    let url =  `https://api.jikan.moe/v4/anime?q=${text}&sfw`;
         console.log(text)
fetch(url)
.then(response => {
    if(response.ok){
       return response.json();
    }
})
.then(data => {
    console.log(data)
    item = data.data;
    showAnime(item)
})
    
.catch(error => console.log(error))
})


 
function showAnime(item){
    container.innerHTML= "";
    
    for (let i = 0; i < item.length; i++) {
        console.log(item)
        container.innerHTML += `
        <div class = "container">
        <div class ="title">
         <h2>${item[i].title} </h2>
        </div>

        <div class = "body">
        <img  src=${item[i].images.jpg.image_url} >
        </div>

        <div class="infoCard">

        <div class = "description">
        <p> Duration:
        ${item[i].duration} </br>
        Status: 
        ${item[i].status} </br>
        Cantidad de episodios:
        ${item[i].episodes}</br>
        Genres: 
        ${item[i].genres[0].name}</br>
        Type:
        ${item[i].genres[0].type}
        </p>
        </div>

        
        <div class="synopsis">
        
        <p>${item[i].synopsis}</p>
        </div>
        </div>
        </div>
        
            `;
    }
    
}
})