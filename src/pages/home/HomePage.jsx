import React from 'react';
import { useNavigate } from 'react-router-dom';




const HomePage = () => {
    //creamos variable para el navegate
    const history = useNavigate();

    return (
        <div>
            <h1>Home Page</h1>
             {/* con onclick llamas a history y colocas -1 para volver a la pagina anterior */}
            <button onClick={()=> history(-1)}>GO back</button>
            
        </div>
    );
}

export default HomePage;
