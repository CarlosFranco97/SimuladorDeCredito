import { login, register } from "../../../controllers/ControllerUsuario.js";

document.getElementById('btnRegistrar').addEventListener('click', register); 
document.getElementById('btnLogin').addEventListener('click', login);

const abrirLogin = document.getElementById('abrir-login');
const formLogin = document.getElementById('login');
const abrirRegistro = document.getElementById('abrir-registro');

abrirLogin.addEventListener('click', () => {
    formLogin.classList.add('abrir-login');
    formLogin.classList.remove('cerrar-login');
    abrirRegistro.classList.add('titulo-registro-cerrar');
});

abrirRegistro.addEventListener('click', () => {
    formLogin.classList.add('cerrar-login');
    formLogin.classList.remove('abrir-login');
    abrirRegistro.classList.remove('titulo-registro-cerrar');
});


