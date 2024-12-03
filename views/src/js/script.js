import { expresionesRegulares } from '../../../helpers/expresiones.js';

// document.querySelector('#btnFormRegistro').addEventListener('click', () => {
//     document.querySelector('#form-login').style.display = 'flex';
//     document.querySelector('#form-registro').style.display = 'none';
// });

// document.querySelector('#btnFormLogin').addEventListener('click', () => {
//     document.querySelector('#form-login').style.display = 'none';
//     document.querySelector('#form-registro').style.display = 'flex';
// })

let inputs = document.getElementsByTagName('input');

for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener('keyup', (event) => validarFormulario(event));
}

function validarFormulario({ target }) {
    switch (target.name) {
        case 'registroNombre':
            if(expresionesRegulares.nombre.test(target.value)) {
                // console.log('pasó la validacion');
                // target.style.border = 'green 3px solid';
                // document.querySelector('#parrafoValidaNombre').style.display = 'none';
                document.getElementById('registroNombre').classList.add('correcto');
                document.getElementById('registroNombre').classList.remove('incorrecto');
                // document.getElementById('mensajeNombre').textContent = ''    
            } else {
                // console.log('El campo solo permite letras en mayusculas');
                // target.style.border = 'red solid 3px';
                // document.querySelector('#parrafoValidaNombre').style.display = 'flex';
                document.getElementById('registroNombre').classList.add('incorrecto');
                document.getElementById('registroNombre').classList.remove('correcto');
                // document.getElementById('mensajeNombre').textContent = 'El campo solo permite letras mayusculas';
            }      

            break;

        case 'usuarioRegistro':
            if (expresionesRegulares.usuario.test(target.value)) {
                // console.log('pasó la validacion');
                // target.style.border = 'green 3px solid';
                // document.querySelector('#parrafoValidaNombre').style.display = 'none';
                document.getElementById('usuarioRegistro').classList.add('correcto');
                document.getElementById('usuarioRegistro').classList.remove('incorrecto');
            } else {
                console.log('El campo solo permite letras en mayusculas');
                // target.style.border = 'red solid 3px';
                // document.querySelector('#parrafoValidaNombre').style.display = 'flex';
                document.getElementById('usuarioRegistro').classList.add('incorrecto');
                document.getElementById('usuarioRegistro').classList.remove('correcto');
            }
            break;
        case 'correoRegistro':
            if (expresionesRegulares.correo.test(target.value)) {
                console.log('pasó la validacion');
                // target.style.border = 'green 3px solid';
                // document.querySelector('#parrafoValidaNombre').style.display = 'none';
                document.getElementById('correoRegistro').classList.add('correcto');
                document.getElementById('correoRegistro').classList.remove('incorrecto');
            } else {
                console.log('El campo solo permite letras en mayusculas');
                // target.style.border = 'red solid 3px';
                // document.querySelector('#parrafoValidaNombre').style.display = 'flex';
                document.getElementById('correoRegistro').classList.add('incorrecto');
                document.getElementById('correoRegistro').classList.remove('correcto');
            }
            break;
        case 'contrasenaRegistro':
            if (expresionesRegulares.contraseña.test(target.value)) {
                // target.style.border = 'green 3px solid';
                // document.querySelector('#parrafoValidaNombre').style.display = 'none';
                document.getElementById('contrasenaRegistro').classList.add('correcto');
                document.getElementById('contrasenaRegistro').classList.remove('incorrecto');
            } else {
                // target.style.border = 'red solid 3px';
                // document.querySelector('#parrafoValidaNombre').style.display = 'flex';
                document.getElementById('contrasenaRegistro').classList.add('incorrecto');
                document.getElementById('contrasenaRegistro').classList.remove('correcto');
            }
            break;
        case 'contrasenaConfirmarRegistro':
            if (target.value === document.getElementById('contrasenaRegistro').value) {
                document.getElementById('contrasenaConfirmarRegistro').classList.add('correcto');
                document.getElementById('contrasenaConfirmarRegistro').classList.remove('incorrecto');

            } else {
                document.getElementById('contrasenaConfirmarRegistro').classList.add('incorrecto');
                document.getElementById('contrasenaConfirmarRegistro').classList.remove('correcto');
            }
        default:
            break;
    }
}
