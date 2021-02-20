// ASYNC-AWAIT
//ESTO ES UNA PROMESA
const getImagen = async () => {
    try {        
        const key = '6njvZZPD98E0ZjegSpeQlRN34IErsbGZ';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${key}`);
        const {data} = await resp.json();

        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src=url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error);
    }

}

//getImagen().then(console.log);

getImagen();



// peticion
// .then(resp => resp.json())
// .then(({data}) => {
//     const {url} = data.images.original;
//     const img = document.createElement('img');
//     img.src=url;
//     document.body.append(img);
// })
// .catch(console.warn)