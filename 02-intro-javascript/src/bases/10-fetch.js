
//Key para poder acceder al recurso en el API
const key = '6njvZZPD98E0ZjegSpeQlRN34IErsbGZ';

//PETICION OBTIENE EL RECURSO REGRESARA UNA PROMESA
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${key}`);

// peticion.then(resp => {
//     resp.json().then(data => {
//         console.log(data);
//     });
//     //console.log(resp);
// }).catch(console.warn)


peticion
.then(resp => resp.json())
.then(({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src=url;
    document.body.append(img);
})
.catch(console.warn)