const inputusuario = document.getElementById("nombre");
const inputcontraseña = document.getElementById("contraseña");
const  btn = document.querySelector(".btn"); 


btn.addEventListener("click", function(e){
    e.preventDefault()
    fetch("http://api-viajes-77bq.vercel.app/api/usuarios/leer")
    .then(response => response.json())
    .then(data => traerData(data))
    async function traerData(data){
        data.forEach((dta) => {
            console.log(dta.email, dta.contraseña)
        if(!inputusuario.value || !inputcontraseña.value){
            alert("Tiene un campo incompleto..")
            
        }else if(inputusuario.value === dta.email && inputcontraseña.value === dta.contraseña){
            alert("Usuario y contraseña correctos");
            window.location.href ="index.html"
            
        }else{
            alert("Usuario o contraseña incorrectos");
            
        }
        });
    }
    
})


