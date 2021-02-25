//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

//FC
//const PrimeraApp = ({saludo = 'Hola mundo'}) => {
const PrimeraApp = ({saludo,subtitulo}) => {
  
    /*const saludo = {
        nombre:'Rodolfo',
        edad:27
    };*/

    //console.log(props);
    //const saludo = 'Hola Mundo';

    // if(!saludo){

    //     throw new Error('El saludo es necesario');
    // }

    return (
        <>
          <h1>{saludo}</h1>
          <p>{subtitulo}</p>
           {/* <h1>{saludo}</h1> */}
           {/* <h1>{JSON.stringify(saludo,null,3)}</h1>*/}
            <p>Mi primera aplicación</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo:PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo:'Soy un subtitulo',
}

export default PrimeraApp;