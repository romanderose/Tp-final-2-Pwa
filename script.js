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

//Solicitud AJAX para buscar el archivo mensaje.txt
const getMensaje = (event) => {
    const http = new XMLHttpRequest();

    http.onreadystatechange = () => {
        //console.log("onreadystatechange");
        //console.log("Ready state: " + http.readyState);
        //console.log("Status: " + http.status);

        if (http.readyState === 4 && http.status === 200) {
        document.getElementById("mensaje").innerHTML = http.responseText;
        };

    };

    http.open('GET', 'http://localhost:5500/mensaje.txt', true);

    http.send();
};

//para validar el formulario
const validar = (event) => {
    valid = true;

    /* Para verificar que los campos estén completos correctamente, y
    en caso de no estarlo, no enviar el formulario y mostrar el mensaje
    de error correspondiente */

    //campo nombre
    if (campos_input[0].value === "") {
        event.preventDefault();
        errorNombre.innerText="Este campo es obligatorio";
        valid = false;
    }else{
        errorNombre.innerText="";
    };

    //campo apellido
    if (campos_input[1].value === "") {
        event.preventDefault();
        errorApellido.innerText="Este campo es obligatorio";
        valid = false;
    }else{
        errorApellido.innerText="";
    };

    /*campo telefono:
    Para que, al ser opcional, el usuario pueda dejarlo vacío, y en caso
    de que tenga contenido, verificar que sea numérico; en caso de error
    mostrar el mensaje y si se corrige el error el mensaje desaparezca
    */
    if (campos_input[2].value !== "") {
        if (!/^\d+$/.test(campos_input[2].value)) {
            event.preventDefault();
            errorTelefono.innerText="Este campo solo acepta caracteres numéricos.";
            valid = false;
        }else{
            errorTelefono.innerText="";
        }
    };

    //campo email
    if (campos_input[3].value === "") {
        event.preventDefault();
        errorEmail.innerText="Este campo es obligatorio";
        valid = false;
    }else{
        errorEmail.innerText="";
    };

    //campo tipo contacto
    if (campo_tipo_contacto.value === "") {
        event.preventDefault();
        errorTipoContacto.innerText="Debe seleccionar una opción";
        valid = false;
    }else{
        errorTipoContacto.innerText="";
    };

    //campo asunto
    if (campos_input[4].value === "") {
        event.preventDefault();
        errorAsunto.innerText="Este campo es obligatorio";
        valid = false;
    }else{
        errorAsunto.innerText="";
    };

    //campo descripcion
    if (campo_descripcion.value === "") {
        event.preventDefault();
        errorDescripcion.innerText="Este campo es obligatorio";
        valid = false;
    }else{
        errorDescripcion.innerText="";
    };

    if(valid){
        event.preventDefault();
        alert("Datos enviados exitosamente.")
        getMensaje();
    }

};