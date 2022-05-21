// Almacenamos el nombre de usuario en una variable
let usuario ='Martin Byrde';

export function saveUser() {
    usuario = document.getElementById('user').value;
    alert(usuario);
    console.log(usuario);
    return usuario;
}

//console.log(usuario);
//document.getElementById('userVariable').innerHTML = 'Martin Byrde';

//export default {usuario};