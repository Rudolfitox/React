//Arreglos en JS
const arreglo = [1,2,3,4];

//No utilizar push ya que modifica el objeto arreglo 
//directamente
//arreglo.push(1);

let arreglo2 = [...arreglo,5];
//arreglo2.push(5);

const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);