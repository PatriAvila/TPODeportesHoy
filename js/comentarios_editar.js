

console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
var id=location.search.substring(4)

console.log(id)


const { createApp } = Vue
createApp({
data() {
return {
idcomentarios:0,
comentariostitulo:"",
comentariosdetalle:"",
comentariosusuario:"",

url:'https://deporteshoy.pythonanywhere.com/comentarios/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {
console.log(data)
this.idcomentarios=data.idcomentarios
this.comentariostitulo= data.comentariostitulo;
this.comentariosdetalle=data.comentariosdetalle;
this.comentariosusuario=data.comentariosusuario;

})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
let comentario = {
comentariostitulo:this.comentariostitulo,
comentariosdetalle:this.comentariosdetalle,
comentariosusuario:this.comentariosusuario,

}
var options = {
body: JSON.stringify(comentario),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "./comments.html";
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