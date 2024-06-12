 // Aquí tu código
 
    const lista = document.getElementById('lista');
    const pulsar = document.getElementById('agregar');
    const elemento = document.createElement("li");
    
  
    
    pulsar.addEventListener("click",function () {
        const nuevo = prompt('Escriba un elemento:');                
        nuevo ? lista.innerHTML = (nuevo) : lista.innerHTML= ("no has introducido ningun elemento")
    })
  
    
  