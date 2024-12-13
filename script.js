const campos_input = document.querySelectorAll("input");
const campo_tipo_contacto = document.querySelector("select");
const campo_descripcion = document.querySelector("textarea");

//contador de caracteres del campo descripción
document.getElementById("descripcion").addEventListener("input",
    function contarCaracteres(){
        const maxLength = this.maxLength; /*cantidad máxima de
        caracteres permitidos*/ 

        const lengthActual = this.value.length; /*cantidad actual
        de caracteres escritos*/

        document.getElementById("contador").innerText = 
        `${lengthActual} / ${maxLength} caracteres`;
    }
);

//párrafos de error
let parrafos = document.querySelectorAll("p");

let errorNombre = parrafos[0];
let errorApellido = parrafos[1];
let errorTelefono = parrafos[2];
let errorEmail = parrafos[3];
let errorTipoContacto = parrafos[4];
let errorAsunto = parrafos[5];
let errorDescripcion = parrafos[7];

//para validar el formulario
function validar(event){
    /* Para verificar que los campos estén completos correctamente, y
    en caso de no estarlo, no enviar el formulario y mostrar el mensaje
    de error correspondiente */

    //campo nombre
    if (campos_input[0].value === "") {
        event.preventDefault();
        errorNombre.innerText="Este campo es obligatorio";
    };

    //campo apellido
    if (campos_input[1].value === "") {
        event.preventDefault();
        errorApellido.innerText="Este campo es obligatorio";
    };

    /*campo telefono:
    Para que, al ser opcional, el usuario pueda dejarlo vacío, y en caso
    de que tenga contenido, verificar que sea numérico
    */
    if (campos_input[2].value !== "") {
        if (campos_input[2].value !== Number) {
            event.preventDefault();
            errorTelefono.innerText="Este campo solo acepta caracteres numéricos.";
        }
    };

    //campo email
    if (campos_input[3].value === "") {
        event.preventDefault();
        errorEmail.innerText="Este campo es obligatorio";
    };

    //campo tipo contacto
    if (campo_tipo_contacto.value === "") {
        event.preventDefault();
        errorTipoContacto.innerText="Debe seleccionar una opción";
    };

    //campo asunto
    if (campos_input[4].value === "") {
        event.preventDefault();
        errorAsunto.innerText="Este campo es obligatorio";
    }

    //campo descripcion
    if (campo_descripcion.value === "") {
        event.preventDefault();
        errorDescripcion.innerText="Este campo es obligatorio";
    }

};