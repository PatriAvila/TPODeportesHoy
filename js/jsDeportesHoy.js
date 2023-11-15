

function ready(cb) {
  document.addEventListener("DOMContentLoaded", cb);
}


 function renderFooter() {
const footer = document.querySelector("footer");


var imginstagram = document.createElement('img'); 
var imgfacebook = document.createElement('img'); 
var imgwhatsapp = document.createElement('img'); 
var imgcorreo = document.createElement('img'); 


 
// Establece la ubicación de la imagen 
imginstagram.src = "./icons/instagram.png";  

imginstagram.src = "../icons/instagram.png";  
imgfacebook.src = "../icons/facebook.png"
imgwhatsapp.src = "../icons/whatsapp.png";  
imgcorreo.src = "../icons/correo.png"


//crea link a Instagram
var aInstagram = document.createElement('a'); 
aInstagram.title = "Instagram"; 
aInstagram.id= "a-Instagram";
aInstagram.href = "http://example.com"; 
footer.appendChild(aInstagram);
// Agrega la imagen al documento 
aInstagram.appendChild(imginstagram); 

//crea link a Facebook
var aFacebook = document.createElement('a'); 
aFacebook.title = "Facebook"; 
aFacebook.id= "a-Facebook";
aFacebook.href = "http://example.com"; 
footer.appendChild(aFacebook);
// Agrega la imagen al documento 
aFacebook.appendChild(imgfacebook);


//crea link a Whatsapp

var aWhatsapp = document.createElement('a'); 
aWhatsapp.title = "Whatsapp"; 
aWhatsapp.id= "a-Whatsapp";
aWhatsapp.href = "http://example.com"; 
footer.appendChild(aWhatsapp);
// Agrega la imagen al documento 
aWhatsapp.appendChild(imgwhatsapp); 



//crea link a Contacto

var aContacto = document.createElement('a'); 
aContacto.title = "Contacto";
aContacto.text = "Contacto";
aContacto.id= "a-Contacto";
aContacto.href = "./FormularioContacto.html"; 
footer.appendChild(aContacto);
// Agrega la imagen al documento 


var pfooter = document.createElement("p");
pfooter.innerText = "Derechos Reservados 2023 ©";
pfooter.id = "pfooter"
footer.appendChild(pfooter);


}


// Cuando nuestro contenido este listo pintamos el footer
ready(renderFooter);
