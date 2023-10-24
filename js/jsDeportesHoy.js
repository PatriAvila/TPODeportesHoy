
// Para mostrar y ocultar el menú hamburguesa al hacer clic en el botón,

    document.getElementById("boton-hamburguesa").addEventListener("click", function () {
        var menu = document.getElementById("menu-hamburguesa");
        
        if (menu.style.display != "block") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });


const scrollElement = document.querySelector(".carousel");
const scrollLeft = document.querySelector(".scroll-left");
const scrollRight = document.querySelector(".scroll-right");

const scrollElementvideo = document.querySelector(".carouselvideo");
const scrollLeftvideo = document.querySelector(".scroll-leftvideo");
const scrollRightvideo = document.querySelector(".scroll-rightvideo");

function moveScroll(displacement) {
  let currentPosition = scrollElement.scrollLeft;
  scrollElement.scrollTo(currentPosition + displacement, 0);
}



function moveScrollvideo(displacement) {
  let currentPosition = scrollElementvideo.scrollLeftvideo;
  scrollElementvideo.scrollTo(currentPosition + displacement, 0);
}

scrollLeft.addEventListener("click", () => {
  moveScroll(-400);
});

scrollRight.addEventListener("click", () => {
  moveScroll(400);
});

scrollLeftvideo.addEventListener("click", () => {
  moveScrollvideo(-400);
});

scrollRightvideo.addEventListener("click", () => {
  moveScrollvideo (400);
});


function ready(cb) {
  document.addEventListener("DOMContentLoaded", cb);
}


 function renderFooter() {
const footer = document.querySelector("footer");


var imginstagram = document.createElement('img'); 
var imgfacebook = document.createElement('img'); 
var imgwhatsapp = document.createElement('img'); 
var imgcorreo = document.createElement('img'); 

imginstagram.classList.add('mystyle'); // adding class
imgfacebook.classList.add('mystyle'); // adding class
imgwhatsapp.classList.add('mystyle'); // adding class
imgcorreo.classList.add('mystyle'); // adding class
 
// Establece la ubicación de la imagen 
imginstagram.src = "./icons/instagram.png";  
imgfacebook.src = "./icons/facebook.png"
imgwhatsapp.src = "./icons/whatsapp.png";  
imgcorreo.src = "./icons/correo.png"


//crea link a Instagram
var aInstagram = document.createElement('a'); 
aInstagram.title = "Instagram"; 
aInstagram.href = "http://example.com"; 
footer.appendChild(aInstagram);
// Agrega la imagen al documento 
aInstagram.appendChild(imginstagram); 

//crea link a Facebook
var aFacebook = document.createElement('a'); 
aFacebook.title = "Facebook"; 
aFacebook.href = "http://example.com"; 
footer.appendChild(aFacebook);
// Agrega la imagen al documento 
aFacebook.appendChild(imgfacebook);


//crea link a Whatsapp

var aWhatsapp = document.createElement('a'); 
aWhatsapp.title = "Whatsapp"; 
aWhatsapp.href = "http://example.com"; 
footer.appendChild(aWhatsapp);
// Agrega la imagen al documento 
aWhatsapp.appendChild(imgwhatsapp); 

//crea link a Correo
var aCorreo = document.createElement('a'); 
aCorreo.title = "Correo"; 
aCorreo.href = "http://example.com"; 
footer.appendChild(aCorreo);
aCorreo.appendChild(imgcorreo);



var pfooter = document.createElement("p");
pfooter.innerText = "All rights reserved 2023 ©";
footer.appendChild(pfooter);

}


// Cuando nuestro contenido este listo pintamos el footer
ready(renderFooter);
