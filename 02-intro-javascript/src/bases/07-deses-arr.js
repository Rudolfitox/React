//Destructuracion
//Asignación desestrurante 2

//Cambiar todo fun + f2
const personajes = ['Goku','Vegeta','Trunks'];
const [ ,p2,p3 ] = personajes;
console.log(p3);

const retornaArreglo = () => {
  return ['ABC',123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);

const useState = (valor) => {
  return [valor,() => {console.log('Hola Mundo')}];
}

const arr = useState('Goku');
arr[1]();

//Tarea
//1.el primer valor del arre se llamará nombre
//2.el segundo se llamara set nombre

const [nombre,setNombre] = useState('Goku');
console.log(nombre);
setNombre();

