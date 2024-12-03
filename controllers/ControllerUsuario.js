// import { usuarios } from '../models/ModelUsuario.js';

const urlUsuarios = 'http://localhost:3000/ModelUsuario';
let usuarios = [];

const getUsuarios = async() => {
 
  fetch(urlUsuarios)
  .then( (response) =>  response.json())
  .then((data) => {
    usuarios = data; 
    console.log(usuarios);
  })
  .catch(err => console.error(err)); 


  // try {
  //   const response = await fetch(urlUsuarios); 
  //   if(!response.ok){
  //     throw new Error('Error en el servidor');
  //   }
  //   const data = await response.json();
  //   console.log(data);
  // } catch(err) {
  //   console.error(err.message);
  // }
}

getUsuarios();


export const login = () => {
    const loginUsuario = document.getElementById('loginUsuario').value;
    const loginContrasena = document.getElementById('loginContrasena').value;
    // const usuarioStorage = JSON.parse(localStorage.getItem("usuarios"));
    
    
    const existeUsuario =  usuarios.some((x) => 
        (loginUsuario === x.usuario || loginUsuario === x.correo) &&
        loginContrasena  === x.contraseña
    ); 

 
    if(!existeUsuario) {
        Swal.fire({
          title: "Error",
          text: "Usuario y/contraseña incorrecto o no existe",
          icon: "error",
        });
        
        return;
    }

    if(existeUsuario) {
        let timerInterval;
        Swal.fire({
          title: `Bienvenido ${loginUsuario}`,
          html: "Será redireccionado en <b></b> milisegundos.",
          timer: 4000,
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
    // let registroNombre = document.getElementById('registroNombre').value;
    // console.log(registroNombre);    
    let registroUsuario = document.getElementById('usuarioRegistro').value;
    let correoRegistro = document.getElementById('correoRegistro').value;
    let contrasenaRegistro = document.getElementById('contrasenaRegistro').value;
    let contrasenaConfirmarRegistro = document.getElementById('contrasenaConfirmarRegistro').value;

    // console.log(typeof(registroNombre));
    // if(registroNombre === '' || registroNombre === null) return;
    // if(registroUsuario === '' || registroUsuario === null) return;

    let newRegistro = {
        // nombre: registroNombre, 
        usuario: registroUsuario,
        correo: correoRegistro,
        contraseña: contrasenaRegistro,
        confirmar: contrasenaConfirmarRegistro
    }

    // usuarios.push(newRegistro);
    // document.getElementById('form-registro').style.display = 'none';
    // document.getElementById('form-login').style.display = 'flex';
    console.log(usuarios);
    // localStorage.setItem("usuarios", JSON.stringify(usuarios)); 
    
    pushUsuario(newRegistro);

  }

  function pushUsuario(newRegistro){
    console.log(newRegistro);
    fetch(urlUsuarios, {
      method: 'POST',
      body: JSON.stringify(newRegistro)
    })
    .catch(err => console.error(err));  
    
  }
