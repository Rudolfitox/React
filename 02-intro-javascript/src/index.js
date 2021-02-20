import { getHeroeById } from "./bases/08-impor-export";

//PROMESAS
// const promesa = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         //console.log('Dos segundos despues');
    
//        const heroe = getHeroeById(2);
//        resolve(heroe);
//        //reject('No se pudo encontrar el héroe');
//        console.log(heroe);
//     },2000)
// });

// promesa.then((heroe) => {
//     console.log('heroe',heroe);
// }).catch(err => console.warn(err));

// const promesa = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         //console.log('Dos segundos despues');
    
//        const heroe = getHeroeById(2);
//        resolve(heroe);
//        //reject('No se pudo encontrar el héroe');
//        console.log(heroe);
//     },2000)
// });


const getHeroeByIdAsyync = (id) => {
    
    return new Promise((resolve,reject) => {
        setTimeout(() => {    
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
        
            }else{
                reject('No se pudo encontrar el héroe');
            }
        },2000)
    });
}

// getHeroeByIdAsyync(1)
// .then(heroe => console.log('Heroe',heroe))
// .catch(err => console.warn(err));

getHeroeByIdAsyync(1)
.then(console.log)
.catch(console.warn)