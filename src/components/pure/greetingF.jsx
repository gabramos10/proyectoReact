import React, {useState} from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    //breve introduciion a useSatet
    //const [variable, metodo para actualizar] = useState(valor inicial);
    const [age, setage] = useState(29);

    const birthday = () => {
        //actualizamos el state
        setage(age+1);

    }

    return (
        <div>
            <h1>
                    HOLA {props.name}  desde componente funcional      
                </h1>
                <h2>
                    EDAD {age}
                </h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div> 
        </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
