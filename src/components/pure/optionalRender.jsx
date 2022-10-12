import React, {useState} from 'react';


let red = 0;
let green = 200;
let blue= 150;

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white'
}

//estilos para no logueado
const unloggedStyle = {

    backgroundColor: 'tomato',
    color: 'white',
    fontweight: 'bolt'
}

//Login / Logout button

const LoginButton = ({LoginAction,propsStyle})=>{
    return(
        <button style={propsStyle} onClick={LoginAction}>Login</button>
    )
}

const LogoutButton = ({LogoutAction, propsStyle})=>{
    return(
        <button style={propsStyle} onClick={LogoutAction}>Logout</button>
    )
}


//? (Expresion true) && expresion => se renderiza la expresion
//? (Expresion false) && expresion => no se renderiza la expresion



const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [message, setMessage] = useState(0);

    // const updateAccess = ()=>{
    //     setAccess(!access);
    // }

    const LoginAction = () =>{
        setAccess(true)
    }

    const LogoutAction = () =>{
        setAccess(false)
    }

    let OptionalButton;


    if(access){
         OptionalButton = <LogoutButton propsStyle={unloggedStyle} LogoutAction={LogoutAction}></LogoutButton>
    }else{
         OptionalButton = <LoginButton propsStyle={loggedStyle} LoginAction={LoginAction}></LoginButton>
    }


    // Unread message

    let addMessages = () => {
        setMessage(message + 1);
    }

    // if(access){
    //     OptionalButton = <button onClick={updateAccess}>Logout</button>
    // }else{
    //     OptionalButton = <button onClick={updateAccess}>Login</button>
    // }

    return (
        <div>
            {/** Optional button */}
            {OptionalButton}

            {/**n messages unread */}

            {/* {message > 0 && message === 1 && <p>You have {message} new messages...</p>}
            {message > 1 && <p>You have {message} new messages...</p>}
            {message === 0 && <p> there are no new messages</p> } */}

            {/** ternay operator */}
            {access ? (<div>
                {message > 0 ? <p>You have {message} new message{message > 1 ? 's': null}...</p> 
                :
                <p>there are no new message</p>}     
                <button onClick={addMessages} >{message === 0 ? 'add your first message': 'add new message'}</button>
            </div>): null}
            
        </div>
    );
}

export default OptionalRender;
