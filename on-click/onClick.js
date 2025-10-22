function cambiarTexto() {
      const boton = document.getElementById("miBoton");
      boton.textContent = "Cerrar sessión";
    }

  var clics = 0
  function incrementar(){
clics = clics + 1 
document.getElementById("contador").innerText = clics
console.log("clics:"+clics);
alert("Gato Atigrado was liked")
}

  // function mostrarMensaje(){
  //   alert("Gato Atigrado was liked")
  //   console.log("Gato Atigrado was liked")
  // }

   var clics2 = 0
function incrementar2(){
clics2 = clics2 + 1 
document.getElementById("contador2").innerText = clics2
console.log("clics2:"+clics2);
alert("Golden Retriver was liked");
}
//  function mostrarMensaje(){
//     alert("Golden Retriever")
//     console.log("Golden Retriever")
//     }

    function desaparecer() {
      const boton = document.getElementById("boton");
      boton.style.display = "none"; // Oculta completamente el botón
    }
