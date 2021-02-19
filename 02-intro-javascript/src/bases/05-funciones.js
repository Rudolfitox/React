//FUNCIONES

/*function saludar(nombre) {
  return `Hola, ${nombre}`;
}*/

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`
const saludar4 = () => `Hola Mundo`;

console.log(saludar2('Vegeta'));
console.log(saludar4());

const getUser = () => ({
    uid:'ABC123',
    username:'El_Papi502'
});

const user = getUser();
console.log(user);

//Tarea
//1-Transformar a una funcion flecha
//2-Tiene que retornar un objeto implícito
//3-Pruebas
/*function getUserActivo(nombre){
  return {
    uid:'ABC567',
    username:'nombre'
  }
}*/

const getUserActivo = () => ({
  uid:'ABC567',
  username:'nombre'
});