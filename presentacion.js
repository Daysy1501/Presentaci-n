var boton=document.getElementById("boton");
boton.addEventListener("click", saludar); //

function saludar(evento){
  var nombre=document.getElementById("nombre").value;
  alert("Hola Amigos " + nombre);
}
