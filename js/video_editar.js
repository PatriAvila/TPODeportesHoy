

console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
var id=location.search.substring(4)

console.log(id)


const { createApp } = Vue
createApp({
data() {
return {
idvideos:0,
videostitulo:"",
videosdetalle:"",
videosusuario:"",

url:'https://deporteshoy.pythonanywhere.com/videos/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {
console.log(data)
this.idvideos=data.idvideos
this.videostitulo=data.videostitulo;
this.videosdetalle=data.videosdetalle;
this.videosusuario=data.videosusuario;

})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
let video = {
videostitulo:this.videostitulo,
videosdetalle:this.videosdetalle,
videosusuario:this.videosusuario,

}
var options = {
body: JSON.stringify(video),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "./videos.html";
})
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')