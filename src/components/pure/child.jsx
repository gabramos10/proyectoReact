import React, {useRef} from 'react';

const Child = ({name, send, update}) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pulsarBoton(){
        const text = messageRef.current.value;
        alert(`Default in input: ${text}`);
    }


    function pulsarBotonParametros(text){
        alert(`Text: ${text}`);


    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }


    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log('On mouse Over')}>Hello, {name}</p>

            <button onClick={() => console.log('Boton 1 uno pulsado')}>
                boton 1
            </button>

            <button onClick={pulsarBoton}>
                boton 2
            </button>

            <button onClick={() => pulsarBotonParametros('hello')}>
                boton 3
            </button>

            

            <input 
                placeholder='insert a text' 
                onFocus={() => console.log('input focus')} 
                onChange={(e) => console.log(' inpunt cambiado:', e.target.value)}
                onCopy={() => console.log('copied text from input')}
                ref = {messageRef}
                />

            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>

            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='new name'/>
                    <button type='submit'> update name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
