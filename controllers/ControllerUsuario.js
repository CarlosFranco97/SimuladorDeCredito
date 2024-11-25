import { usuarios } from '../models/ModelUsuario.js';
export const login = () => {
    const loginUsuario = document.getElementById('loginUsuario').value;
    const loginContrasena = document.getElementById('loginContrasena').value;
    const usuarioStorage = JSON.parse(localStorage.getItem("usuarios"));
    
    
    const existeUsuario =  usuarioStorage.some((x) => 
        (loginUsuario === x.usuario || loginUsuario === x.correo) &&
        loginContrasena  === x.contraseña
    ); 

 
    if(!existeUsuario) {
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
          });
    }

    if(existeUsuario) {
        let timerInterval;
        Swal.fire({
          title: `Bienvenido ${loginUsuario}`,
          html: "Será redireccionado en <b></b> milisegundos.",
          timer: 1500,
          icon: "success",
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
            window.location.href = '/views/pages/viewCredito.html';
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });    
    } 
}

export const register = () => {
    //capturando nombre del campo
    let registroNombre = document.getElementById('registroNombre').value;
    console.log(registroNombre);    
    let registroUsuario = document.getElementById('usuarioRegistro').value;
    let correoRegistro = document.getElementById('correoRegistro').value;
    let contrasenaRegistro = document.getElementById('contrasenaRegistro').value;
    let contrasenaConfirmarRegistro = document.getElementById('contrasenaConfirmarRegistro').value;

    console.log(typeof(registroNombre));
    if(registroNombre === '' || registroNombre === null) return;

    let newRegistro = {
        nombre: registroNombre, 
        usuario: registroUsuario,
        correo: correoRegistro,
        contraseña: contrasenaRegistro,
        confirmar: contrasenaConfirmarRegistro
    }

    usuarios.push(newRegistro);
    document.getElementById('form-registro').style.display = 'none';
    document.getElementById('form-login').style.display = 'flex';
    console.log(usuarios);
    localStorage.setItem("usuarios", JSON.stringify(usuarios)); 
}
