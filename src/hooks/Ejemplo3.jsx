/**
 * Ejemplo hooks:
 * -useState()
 * -useContext()
 */

import React, {useState, useContext} from 'react';

/**
 * componente 1
 * dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

 const miContexto = React.createContext(null)

const Componente1 = () => {


    //inicializamos con estado vacio que se rellenara con los dato del padre
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const state = useContext(miContexto);
    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>

            {/**pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}


const Componente2 = () => {

    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                la sesion es: {state.sesion}
            </h2>
        </div>
    );
}




export default function MiComponenteConContexto() {

  const estadoInicial = {
    token: '1234567',
    sesion: 1
  }  

  //creamos el estado de este componente

  const [sessionData, setSessionData] = useState(estadoInicial);

  function actualizarSesion(){
    setSessionData({
        token:'jwt123456789',
        sesion: sessionData.sesion + 1
    });
  }


  return (
    <miContexto.Provider value={sessionData}>
        {/* todo lo que esta aqui dentro puede leer los datos de sessionData
        ademas, si actualiza los componentes aqui tambien los actualizza  */}
        <h1>***ejemplo de useState y useContext</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>actualizar session</button>
    </miContexto.Provider>
  )
}



