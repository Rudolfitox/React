//TEMPLATE STRING

const nombre = 'Rodolfo';
const apellido = 'Garcia';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
  return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)