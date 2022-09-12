/**
 * Ejemplo de uso del hook useState
 * 
 * Crear un componente de tipo funcion y acceder a su estado privado
 * a traves de un hook y, ademas poder modificarlo
 */

import React, {useState} from 'react';

const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial = 0;

    //valor inicial para persona
    const personaInical ={
        nombre : 'martin',
        email: 'gabo@gmail.com'
    }

    /**
     * queremos que el VALORINICAL y PERSONAINICIAL sean 
     * parte del estado del componente poara que asi gestionar
     * su cambio y que este se vea reflejado en la vista del componente
     * 
     * const[nombrevariable, funcionpara cambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInical);


    /**
     * Funcion para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        // funcionaParaCambiar(nuevoValor)
        setContador(contador + 1)
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */
    function actualizarPersona(){
        setPersona(
            {
                nombre: 'gabriel',
                email: 'martin@gmail.com'
            }
        )
    }

    return (
        <div>
            <h1>***Ejemplo de useState()***</h1>
            <h2>Contador:{contador}</h2>
            <h2>Datos persona</h2>
            <h3>nombre:{persona.nombre}</h3>
            <h3>email:{persona.email}</h3>
            {/**bloque de botones para actualizar el estado del componentes */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>


        </div>
    );
}

export default Ejemplo1;


