
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
  let currentPosition = scrollElementvideo.scrollLeft;
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

const linkList = [
  {
    url: "index.html",
    text: "Home"
  },
  {
    url: "https://www.twitter.com",
    text: "Twitter"
  },
  {
    url: "https://www.linkedin.com",
    text: "Facebook"
  },
  {
    url: "",
    text: "Instagram"
  },
  {
    url: "",
    text: "Whatsapp"
  },
];

function createLink({ text, url }) {
  // Creamos un elemento tipo link
  const linkElement = document.createElement("a");
  // Creamos un nodo de texto
  const textNode = document.createTextNode(text);

  // Agregamos el texto al link
  linkElement.appendChild(textNode);
  // Especificamos la url del link
  linkElement.href = url;
  // Especificamos el target
  linkElement.target = "_blank";

  return linkElement;
}

function createListItem(linkElement) {
  // Creamos un elemento tipo item de lista
  const listItemElement = document.createElement("li");

  // Agregamos nuestro link a nuestro item de lista
  listItemElement.appendChild(linkElement);

  return listItemElement;
}

function createList() {
  // Creamos una elemento tipo lista no-ordenada
  const unorderedList = document.createElement("ul");

  // Iteramos nuestra lista de links
  linkList.forEach((link) => {
    // Creamos un elemento tipo link
    const linkElement = createLink(link);
    // Creamos un elemento tipo item de lista
    const listItemElement = createListItem(linkElement);
    // Agregamos nuestro item de lista a la lista no-ordenada
    unorderedList.appendChild(listItemElement);
  });

  return unorderedList;
}

function renderFooter() {
  // Creamos la lista no-ordenada
  const list = createList();
  // Seleccionamos el footer
  const footer = document.querySelector("footer");
  // Agregamos nuestra lista no-ordenada al footer
  footer.appendChild(list);
}

// Cuando nuestro contenido este listo pintamos el footer
ready(renderFooter);
