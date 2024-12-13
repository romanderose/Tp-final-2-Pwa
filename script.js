let campos = document.querySelectorAll("input");

//parrafos de error
let parrafos = document.querySelectorAll("p");

let errorNombre = parrafos[0];
let errorApellido = parrafos[1];
let errorEmail = parrafos[2];
let errorPassword = parrafos[3];
let errorRepetirPassword = parrafos[4];
let errorTelefono = parrafos[5];

//para validar el formulario
function validar(event){
    //para verificar que ningún campo esté vacío
    if (campos[0].value === "") {
        event.preventDefault();
        errorNombre.innerText="Este campo es obligatorio";
    };

    if (campos[1].value === "") {
        event.preventDefault();
        errorApellido.innerText="Este campo es obligatorio";
    };

    if (campos[2].value === "") {
        event.preventDefault();
        errorEmail.innerText="Este campo es obligatorio";
    };

    if (campos[3].value === "") {
        event.preventDefault();
        errorPassword.innerText="Este campo es obligatorio";
    };

    if (campos[4].value === "") {
        event.preventDefault();
        errorRepetirPassword.innerText="Este campo es obligatorio";
    }else {
        //para verificar que las contraseñas sean iguales 
        if (campos[3].value !== campos[4].value){
            event.preventDefault();
            errorRepetirPassword.innerText="Las contraseñas no coinciden";
        }
    };

    if (campos[5].value === "") {
        event.preventDefault();
        errorTelefono.innerText="Este campo es obligatorio";
    }
    
    
    if (campos[5].value !== Number) {
        event.preventDefault();
        errorTelefono.innerText="Este campo solo acepta caracteres numéricos.";
    };

};