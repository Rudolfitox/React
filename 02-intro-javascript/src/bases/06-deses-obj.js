//Destructuracion
//Asignación desestrurante

const persona = {
  nombre:'Tony',
  edad:45,
  clave:'Ironman',
  rango:'Soldado'
}

//Renombrarlo
//const {nombre:nombre2} = persona;

const {nombre,edad,clave} = persona;

//console.log(nombre2);
//console.log(nombre);
//console.log(edad);
//console.log(clave);

/*const retornaPersona = ({ edad, clave, nombre,rango='Capitan'}) => {
  //const { edad, clave, nombre} = usuario; 
  
  //console.log(nombre,edad,clave,rango);
  return {
    nombreClave:clave,
    anios:edad

  }
}*/

const useContext = ({ edad, clave, nombre,rango='Capitan'}) => {
  //const { edad, clave, nombre} = usuario; 
  
  //console.log(nombre,edad,clave,rango);
  return {
    nombreClave:clave,
    anios:edad,
    latlng:{
      lat:14.123,
      lng:-12.344
    }

  }
}

//const avenger = useContext(persona);
//const {nombreClave,anios,latlng:{lat,lng}} = useContext(persona);
const {nombreClave,anios,latlng} = useContext(persona);
const {lat, lng} = latlng; 

console.log(nombreClave,anios);
console.log(lat,lng);
