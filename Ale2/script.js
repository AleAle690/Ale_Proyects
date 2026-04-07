function cambiarContenido() {

    let menu = document.getElementById("rubro");
    let valor = menu.value;

    let todos = document.querySelectorAll(".contenido");

    // ocultar todos
    todos.forEach(div => {
        div.style.display = "none";
    });

    // si no selecciona nada, no muestra nada
    if (valor === "") {
        return;
    }

    // mostrar los divs correspondientes
    let mostrar = document.querySelectorAll("." + valor);

    mostrar.forEach(div => {
        div.style.display = "block";
    });
}
function verificar(){
    let p1 = document.getElementById("pass1").value;
    let p2 = document.getElementById("pass2").value;

    if(p1 === p2){
        alert("Contraseña correcta");
    }else{
        alert("Las contraseñas no coinciden");
    }
}

let password = document.getElementById("password");
let ojo = document.getElementById("togglePassword");

ojo.addEventListener("click", function(){

    if(password.type === "password"){
        password.type = "text";
        ojo.src = "vista.png";
    }else{
        password.type = "password";
        ojo.src = "esconder1.png";
    }

});

let password1 = document.getElementById("password1");
let ojo1 = document.getElementById("togglePassword");

ojo.addEventListener("click", function(){

    if(password1.type === "password"){
        password1.type = "text";
        ojo.src = "vista.png";
    }else{
        password1.type = "password";
        ojo1.src = "esconder1.png";
    }

});