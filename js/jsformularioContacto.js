///////
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
    
  function validarFormulario(evento) {
    evento.preventDefault();
    
    var mensaje = document.getElementById('mensaje').value;
    if(mensaje.length == 0) {
      alert('No has escrito nada en el mensaje');
      return;
    }
    // var clave = document.getElementById('clave').value;
    // if (clave.length < 6) {
    //   alert('La clave no es válida');
    //   return;
    // }

    this.submit();
    alert("Gracias por Enviar sus datos")
    Formulario.reset()

}
  
