//OBJETOS LITERALES
const persona = {
  nombre:'Tony',
  apellido:'Noyola',
  edad:45,
  direccion:{
    ciudad:'New York',
    zip:'2330300303',
    lat:'14.3232',
    lng:'82.2277'
  }
};

//Se esta imprimiendo un objeto que tiene una propiedad
//con un valor objeto
console.log({persona});

console.log(persona);


//Copia de la referencia a memoria del objeto persona
//FORMA NO CORRECTA
const persona2 = persona;
//persona2.nombre = 'Peter';

const persona3 = {...persona};
persona3.nombre = 'Fred';

console.log(persona);
console.log(persona2);
console.log(persona3);

