import React, {useState} from 'react';


//definiendo estilos en constantes
//estilo usuario logueado
const loggedStyle = {

    color: 'white'
}

//estilos para no logueado
const unloggedStyle = {

    color: 'tomato',
    fontWeight:'bold'
}


const GreetingStyled = (props) => {

    //generamos un estado para el componente y controlar si el usuario esta logueado

    const [logged, setLogged] = useState(false);



    


    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            {logged ? 
            (<p>Hola, {props.name}</p>) 
            : 
            (<p>please login</p>)}
            
            <button onClick={() => {
                console.log('boton pulsado');
                setLogged(!logged);
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
