const inputNombre = document.getElementById("nombre")
const inputApellido = document.getElementById("apellido")
const inputDni = document.getElementById("dni")
const inputPais = document.getElementById("pais")
const inputEmail = document.getElementById("email")
const inputContraseña = document.getElementById("contraseña")
const btn = document.querySelector(".btn")


btn.addEventListener("click", function(){
    datos = {
        "nombre": inputNombre.value,
        "apellido": inputApellido.value,
        "dni": inputDni.value,
        "pais": inputPais.value,
        "email": inputEmail.value,
        "contraseña": inputContraseña.value,
    }
    console.log(datos)
    fetch('http://api-viajes-77bq.vercel.app/api/usuarios', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(datos) 
  
})

  if(inputNombre.value === "" || inputApellido.value === "" || inputDni.value === "" || inputPais.value === "" || inputEmail.value === "" || inputContraseña.value === ""){
    alert("Tiene un campo incompleto.")
  }else{
    alert("Se registro con exito.")
    window.location.href ="iniciarsesion.html"
  }

})

