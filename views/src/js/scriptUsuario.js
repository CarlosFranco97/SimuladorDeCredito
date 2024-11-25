import { login, register } from "../../../controllers/ControllerUsuario.js";

document.getElementById('btnRegistrar').addEventListener('click', register); 
document.getElementById('btnLogin').addEventListener('click', login);

