/**
 * Ejemplo de uso de los sigueinte hooks
 * -useState()
 * -useRef()
 * -useEffect()
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    //vamos a crear dos contadores distintos
    //cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);


    //vamos a crear una regferencia con useRef() para asociar una variable
    // con un elemoento del DOM del componenete (vista HTML)

    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1)
    }

    function incrementar2(){
        setContador2(contador2 + 1)
    }

    /**
     * trabajando con useEffect
     */

    /**
     * caso 1: ejecutar SIEMPRE un snippet de codigo
     * cada vez que haya un cambio en ele stado del componente 
     * se ejecuta aquello que este dentro del useEffect
     */

    // useEffect(() => {
    //     console.log('cambio estado del componente');
    //     console.log('mostrado referencia a elemento del DOM');
    //     console.log(miRef);
        
    // },);

    /**
     * Caso 2: ejecutar solo cuando cambie contador 1
     * cada vez que cambia el contador 1 se ejecuta lo que diga el useEffect()
     *
     */

    // useEffect(() => {
    //     console.log('cambio estado del contador 1');
    //     console.log('mostrado referencia a elemento del DOM');
    //     console.log(miRef);
    // }, [contador1]);

    /**
     * Caso 3: ejecutar solo cuando cambie contador 1 o contador 2
     * cada vez que cambia el contador 1 o 2  se ejecuta lo que diga el useEffect()
     *
     */

    useEffect(() => {
        console.log('cambio estado del contador 1 / contador 2');
        console.log('mostrado referencia a elemento del DOM');
        console.log(miRef);
    }, [contador1,contador2]);

    return (
        <div>
            <h1>***Ejemplo de useState(), useEffect() y useRef***</h1>
            <h2>contador1: {contador1}</h2>
            <h2>contador2: {contador2}</h2>
            {/**elemento referenciado */}
            <h4 ref={miRef}>
                ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={incrementar1}>incrementar contador 1</button>
                <button onClick={incrementar2}>incrementar contador 2</button>
            </div>

        </div>
    );
}

export default Ejemplo2;
