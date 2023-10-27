///////
document.addEventListener("DOMContentLoaded", function() 
{
document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
    
  function validarFormulario(evento) {
    evento.preventDefault();
    
    var mensaje = document.getElementById('mensaje').value;
    if(mensaje.length == 0) {
      alert('No has escrito nada en el mensaje');
      return;
    }
    

    this.submit();
    alert("Gracias por Enviar sus datos")
    
    Formulario.reset()
    function closeCurrentWindow() {
      window.close();
    }

}

function irAPaginaInicio() {
  // Redirigir a la página de inicio (puedes reemplazar "index.html" con la URL de tu página de inicio)
  window.location.href = "index.html";
}
  
