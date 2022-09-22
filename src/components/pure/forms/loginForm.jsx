/**
 * componente que va atener un form para autentificar usuarios
 */

import React, {useState} from 'react';

const LoginForm = () => {

    const iniciarCredenciales = [{ 
        user:'',
        password:''
    }];

    const [credencial, setCredencial] = useState(iniciarCredenciales);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
