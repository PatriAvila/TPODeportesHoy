
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

// onload = () => {
//   console.log(scrollElement.style);
//   if (scrollElement.style.display) {
//     scrollLeft.style.display = "none";
//   }
// };

// onload = () => {
//   console.log(scrollElementvideo.style);
//   if (scrollElementvideo.style.display) {
//     scrollLeftvideo.style.display = "none";
//   }
// };







function ready(cb) {
  document.addEventListener("DOMContentLoaded", cb);
}


 function renderFooter() {


  var a = document.createElement('a'); 
  var linkText = document.createTextNode("my title text"); 
  a.appendChild(linkText); 
  a.title = "Instagram"; 
  a.href = "http://example.com"; 
 

  





const footer = document.querySelector("footer");
//   // Agregamos nuestra lista no-ordenada al footer
var img1 = document.createElement('img'); 
var img2 = document.createElement('img'); 

img1.classList.add('mystyle'); // adding class
img2.classList.add('mystyle'); // adding class
 
// Establece la ubicación de la imagen 
img1.src = "./icons/whatsapp_2504957 (1).png";  
img2.src = "./icons/instagram_2111463.png"

var a = document.createElement('a'); 
var linkText = document.createTextNode("Instagram"); 
a.appendChild(linkText); 
a.title = "Instagram"; 
a.href = "http://example.com"; 

const src = "./icons/whatsapp_2504957 (1).png";
let imgTag = document.createElement('img');
imgTag.src = src;

footer.appendChild(a);


// Agrega la imagen al documento 
footer.appendChild(img1); 
footer.appendChild(img2)

}

// agregar imagenes
var img = document.createElement('img'); 
img.classList.add('mystyle'); // adding class
 
// Establece la ubicación de la imagen 
img.src = "./icons/whatsapp_2504957 (1).png";  



// Cuando nuestro contenido este listo pintamos el footer
ready(renderFooter);
