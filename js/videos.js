const { createApp } = Vue
createApp({
data() {
return {
videos:[],
//url:'http://localhost:5000/productos',
// si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
url:'https://deporteshoy.pythonanywhere.com/videos', // si ya lo subieron a pythonanywhere
error:false,
cargando:true,
/*atributos para guardar los valores del formulario */
idvideos:0,
videostitulo:"",
videosdetalle:"",
videosusuario:"",

}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {
this.videos = data;
this.cargando=false
})
.catch(err => {
console.error(err);
this.error=true
})
},
eliminar(video) {
const url = this.url+'/' + video;
var options = {
method: 'DELETE',
}
fetch(url, options)
.then(res => res.text()) // or res.json()
.then(res => {
location.reload();
})
},
grabar(){
let video = {
videostitulo:this.videostitulo,
videosdetalle: this.videosdetalle,
videosusuario: this.videosusuario,

}
var options = {
body:JSON.stringify(video),
method: 'POST',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro grabado")
window.location.href = "./videos.html";
})
.catch(err => {
console.error(err);
alert("Error al Grabarr")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')
