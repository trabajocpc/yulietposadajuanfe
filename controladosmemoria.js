let memoria = JSON.parse(localStorage.getItem("memoria"))
console.log(memoria)

let contenedor=document.getElementById("contenedor")

//usando la memoria 
memoria.forEach(function (reserva) {

  let fila = document.createElement("div")
  fila.classList.add("row", "my-5", "shadow")

  let colu= document.createElement("div")
  colu.classList.add("col-4")

  let columna2= document.createElement("div")
  columna2.classList.add("col-8")

  let nombre = document.createElement("h3")
  nombre.textContent = reserva.nombreUsuario

  let titulo = document.createElement("h2")
  titulo.classList.add("text-center")
  titulo.textContent = "RESERVA ASIGNADA"

  let cedula = document.createElement("h5")
  cedula.classList.add("text-center")
  cedula.textContent =reserva.cedulaUsuario

  let fecha = document.createElement("p")
  fecha.classList.add("text-center")
  fecha.textContent =reserva.cedulaUsuario

  
  //pintando desde js
  colu.appendChild(titulo)
  columna2.appendChild(nombre)
  columna2.appendChild(cedula)
  fila.appendChild(colu)
  fila.appendChild(columna2)
  contenedor.appendChild(fila)
})