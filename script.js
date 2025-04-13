window.onload = function() {

let primero = ['Mi ']
let quien = ['perro ', 'dinosaurio ', 'alienigena ', 'foca '];
let accion = ['quemo ', 'cocino ', 'exploto ', 'teletrasporto '];
let objeto = ['mi libro ', 'el proyecto ', 'el celular '];
let momento = ['mientras trabajaba.', 'cuando estaba durmiendo.', 'mientras hacia pis.', 'cuando fui a marte.' ];

//
let raro1 = Math.floor(Math.random() * quien.length)
let raro2 = Math.floor(Math.random() * accion.length)
let raro3 = Math.floor(Math.random() * objeto.length)
let raro4 = Math.floor(Math.random() * momento.length)

document.querySelector("#excuse").innerHTML = primero + quien[raro1] + accion[raro2] + objeto[raro3] + momento[raro4]; 

}