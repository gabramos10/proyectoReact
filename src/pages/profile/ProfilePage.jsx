import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({user}) => {

    //creamos variable para el navegate
    const history = useNavigate();

    
    return (
        <div>
            <h1>Your Profile</h1>
            <button onClick={() => history('/tasks')}>Task</button>

            {/* con onclick llamas a history y colocas -1 para volver a la pagina anterior */}
            <button onClick={()=> history(-1)}>GO back</button>

            {/* funcion para ir a una ruta especifica con usenavigate */}
            <button onClick={()=> history('/')}> GO HOME</button>
        </div>
    );
}

export default ProfilePage;
