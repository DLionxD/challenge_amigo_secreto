// Crear variable que guarde el nombre de sus amigos
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById ("listaAmigos");
const ulResultado = document.getElementById("resultado");
//Función declarativa
function agregarAmigo(){
    if (inputAmigo.value == ""){
    alert ("Ingresa un nombre")
    }

   listaAmigos.push(inputAmigo.value); 
   // comprobar lista console.log(listaAmigos);
   ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;  

};

function sortearAmigo(){
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos [random];
    ulResultado.innerHTML = `<li>El amigo secreto es:${amigoSecreto}</li>`;

};



